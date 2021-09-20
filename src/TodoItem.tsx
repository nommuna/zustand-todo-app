import React from 'react'
import shallow from 'zustand/shallow'
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo, useStore } from './Store/store'
import { stat } from 'fs';

type Props = {
    todo: Todo
}
export const TodoItem = ({ todo }: Props) => {
    const { deleteTodo } = useStore(state => ({ deleteTodo: state.deleteTodo}), shallow)

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
