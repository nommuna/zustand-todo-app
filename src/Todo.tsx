import React from 'react'
import shallow from 'zustand/shallow'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { Grid, Paper, Typography, IconButton, Divider } from '@mui/material'
import { useStore } from './Store/store'
import { TodoItem } from './TodoItem'
import { TodoModal } from './TodoModal'

export const Todo = () => {
    const openModal = useStore(state => state.openTodoModal)
    const { modal, todos } = useStore(state => ({ modal: state.todoModal, todos: state.todos}), shallow)

    return (
        <>
            <Grid container justifyContent="center" sx={{ paddingTop: '50px' }}>
                <Grid item>
                    <Paper elevation={3} sx={{ backgroundColor: '#272727', maxHeight: '600px', width: '800px', overflow: 'scroll' }}>
                        <Grid container spacing={2} justifyContent='center' alignItems="center">
                            <Grid item xs={10}>
                                <Typography variant="h3" textAlign='center' sx={{ color: '#BC6FF1' }}>
                                    Todo
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton data-testid="add-button" onClick={() => openModal(true)}>
                                    <AddBoxIcon fontSize='large' sx={{ color: 'white' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider variant="middle" sx={{ backgroundColor: '#686D76' }} />
                            </Grid>
                            {todos.map(todo => (
                                <Grid item xs={12} key={todo.id}>
                                    <TodoItem todo={todo}/>
                                </Grid>
                            ))}

                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            {modal && (<TodoModal />)}
        </>

    )
}
