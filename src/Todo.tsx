import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { Grid, Paper, Typography, IconButton, Divider } from '@mui/material'
import { useTodoStore } from './Store/store'
import { TodoItem } from './TodoItem'
import { TodoModal } from './TodoModal'

export const Todo = () => {
    const openModal = useTodoStore(state => state.openTodoModal)
    const modal = useTodoStore(state => state.todoModal)
    const todos = useTodoStore(state => state.todos)

    return (
        <>
            <Grid container justifyContent="center" sx={{ paddingTop: '50px' }}>
                <Grid item>
                    <Paper elevation={3} sx={{ backgroundColor: '#272727', minHeight: '600px', width: '800px' }}>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item xs={10}>
                                <Typography variant="h3" textAlign='center' sx={{ color: '#BC6FF1' }}>
                                    My Todo
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
