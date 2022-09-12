import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {TaskType} from "../../lib/prismaTypes"

export const taskApi = createApi({
	reducerPath: "taskApi",
	baseQuery: fetchBaseQuery({baseUrl: "/api"}),
	tagTypes: ["Task"],
	endpoints: builder => ({
		getAllTasks: builder.query<
			TaskType[],
			{filterByName: boolean; filterString: string}
		>({
			query: arg => {
				return {
					url: "/tasks",
					params: arg,
				}
			},
			providesTags: ["Task"],
		}),
		getTask: builder.query<TaskType, string | string[]>({
			query: id => `/tasks/${id}`,
			// providesTags: ['Task'],
			// providesTags: (result, error, arg) =>
			//   result ? [{type: 'Task' as const, id: result.id}, 'Task'] : ['Task'],
		}),
		addTask: builder.mutation<void, {title: string; description: string}>({
			query: task => ({
				url: "/tasks",
				method: "POST",
				body: JSON.stringify(task),
			}),
			invalidatesTags: ["Task"],
		}),
		updateTask: builder.mutation<void, TaskType>({
			query: ({id, ...rest}) => ({
				url: `/tasks/${id}`,
				method: "PUT",
				body: JSON.stringify(rest),
			}),
			// invalidatesTags: ['Task'],
			// invalidatesTags: (result, error, arg) => {
			//   return [{type: 'Task', id: arg.id}]
			// },
		}),
		deleteTask: builder.mutation<void, string | string[]>({
			query: id => ({
				url: `/tasks/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Task"],
		}),
	}),
})

export const {
	useGetAllTasksQuery,
	useGetTaskQuery,
	useAddTaskMutation,
	useUpdateTaskMutation,
	useDeleteTaskMutation,
} = taskApi
