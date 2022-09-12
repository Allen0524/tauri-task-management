import {NextApiRequest, NextApiResponse} from "next"
import prisma from "../../../../lib/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const method = req.method
	const {id} = req.query

	switch (method) {
		case "GET": {
			const task = await prisma.task.findUnique({
				where: {
					id: Number(id),
				},
			})

			res.json(task)
			break
		}
		case "PUT": {
			const updateTask = JSON.parse(req.body)
			const updatedtask = await prisma.task.update({
				where: {
					id: Number(id),
				},
				data: {
					...updateTask,
				},
			})
			res.json("success")
			break
		}
		default:
			return res.status(405).json({message: "Method not allowed"})
	}
}
