import {NextApiRequest, NextApiResponse} from "next"
import prisma from "../../../../lib/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const method = req.method
	const query = req.query

	switch (method) {
		case "GET": {
			let filteredTasks = null

			if (query?.filterByName) {
				filteredTasks = await prisma.task.findMany({
					where: {
						title: {
							contains: `${query.filterString}`,
						},
					},
				})
			} else {
				filteredTasks = await prisma.task.findMany()
			}

			res.json(filteredTasks)
			break
		}

		case "POST": {
			const taskData = JSON.parse(req.body)

			const savedTask = await prisma.task.create({
				data: taskData,
			})

			res.json(savedTask)
			break
		}

		default:
			return res.status(405).json({message: "Method not allowed"})
	}
}
