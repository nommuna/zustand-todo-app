import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export type Todo = {
    id: string, 
    description: string
}

type TodoState = {
    todos: Todo[]
    addTodo: (text: string) => void
    deleteTodo: (id: string) => void
    todoModal: boolean
    openTodoModal: (open: boolean) => void
}

export const useTodoStore = create<TodoState>(set => ({
    todos: [],
    todoModal: false,
    addTodo: (description) => set(state => ({todos: [...state.todos, {id: uuidv4(), description } ]})),
    deleteTodo: (id) => set(state => ({todos: state.todos.filter((todo) => todo.id !== id) })),
    openTodoModal: (open) => set(state => ({todoModal: !state.todoModal}))
}))