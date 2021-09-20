import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useTodoStore } from './Store/store'

export const TodoModal = () => {
    const [todoText, setTodoText] = useState("")
    const modal = useTodoStore(state => state.todoModal)
    const closeModal = useTodoStore(state => state.openTodoModal)
    const addTodo = useTodoStore(state => state.addTodo)

    return (
        <Dialog open={modal}>
            <DialogTitle>Add Item</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Item"
                    fullWidth
                    variant="standard"
                    data-testid="item-text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    addTodo(todoText)
                    closeModal(false)
                }}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}
