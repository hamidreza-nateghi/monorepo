/**
 * @author
 * Hamidreza Nateghi
 */
import { render, screen } from '@testing-library/react'
import MyButton from './MyButton'

test('renders my button', () => {
  render(<MyButton />)

  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})

test('renders correct label when no label passed', () => {
  render(<MyButton />)

  const button = screen.getByRole('button')

  expect(button.textContent).toMatch(/click him/i)
})

test('renders correct label when label passed', () => {
  render(<MyButton hasLabel />)

  const button = screen.getByRole('button')

  expect(button.textContent).toMatch(/click me/i)
})
