import { FC } from 'react'
import { List } from '@mantine/core'
import { Task } from '@prisma/client'
import useStore from '../store'
import { useMutateTask } from '../hooks/useMutateTask'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

export const TaskItem: FC<Omit<Task, 'createdAt' | 'updateAt' | 'userId'>> = ({ id, title, description }) => {
  const update = useStore((state) => state.updateEditedTask)
  const { deleteTaskMutation } = useMutateTask()
  return (
    <List.Item>
      <div className='float-left mr-10'>
        <PencilIcon
          className='mx-1 h-5 w-5 cursor-pointer text-blue-500'
          onClick={() => {
            update({
              id,
              title,
              description
            })
          }}
        />
        <TrashIcon
          className='h-5 w-5 cursor-pointer text-blue-500'
          onClick={() => {
            deleteTaskMutation.mutate(id)
          }}
        />
      </div>
      <span>{title}</span>
    </List.Item>
  )
}
