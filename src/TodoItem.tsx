import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { Todo, useTodoStore } from './Store/store'
import { stat } from 'fs';

type Props = {
    todo: Todo
}
export const TodoItem = ({ todo }: Props) => {
    const deleteTodo = useTodoStore(state => state.deleteTodo)
    return (
        <Card sx={{ minWidth: '100px', backgroundColor: '#686D76'}}>
            <Grid container justifyContent="center" alignItems='center'>
                <Grid item xs={11}>
                    <CardContent>
                        <Typography variant="h5" textAlign="center">
                            {todo.description}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => deleteTodo(todo.id)}>
                        <DeleteIcon fontSize='small' sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </Grid>

        </Card>
    )
}
