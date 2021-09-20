import create, {SetState} from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export type Todo = {
    id: string, 
    description: string
}

type TodoState = {
    todos: Todo[]
    addTodo: (text: string) => void
    deleteTodo: (id: string) => void
}

type ModalState = {
    todoModal: boolean
    openTodoModal: (open: boolean) => void
}

type StoreState = TodoState & ModalState

const createTodoSlice = (set: SetState<StoreState>) => ({
    todos: [],
    addTodo: (description: string) => set(prevState => ({todos: [...prevState.todos, {id: uuidv4(), description } ]})),
    deleteTodo: (id: string) => set(prevState => ({todos: prevState.todos.filter((todo) => todo.id !== id) })),
})

const createModalSlice = (set: SetState<StoreState>) => ({
    todoModal: false,
    openTodoModal: () => set(prevState => ({todoModal: !prevState.todoModal}))
})

export const useStore = create<TodoState & ModalState>((set) => ({
      ...createTodoSlice(set),
      ...createModalSlice(set)
  }));