import { create } from 'zustand'
import { EditedTask } from '@/types'

type State = {
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  // 初期状態
  editedTask: {
    id: 0,
    title: '',
    description: '',
  },

  // 更新用メソッド
  updateEditedTask: (payload) =>
    set({
      editedTask: {
        id: payload.id,
        title: payload.title,
        description: payload.description,
      },
    }),

  // 更新タスク初期化
  resetEditedTask: () =>
    set({ editedTask: { id: 0, title: '', description: '' } }),
}))

export default useStore
