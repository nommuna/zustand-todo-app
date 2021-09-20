import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test('renders "My Todo" when starting the app', () => {
  render(<App />)
  expect(screen.getByText('My Todo')).toBeInTheDocument()
})

test('adds a todo item when clicking on the add button', () => {
  render(<App />)
  userEvent.click(screen.getByTestId('add-button'))
  userEvent.click(screen.getByTestId('item-text'))
  userEvent.type(screen.getByTestId('item-text'), 'apple')
  userEvent.click(screen.getByText('OK'))
  
  expect(screen.getByText('apple')).toBeInTheDocument()
})


