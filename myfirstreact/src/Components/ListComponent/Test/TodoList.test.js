import { render, screen ,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TodoList from '../../TodoList';
import React from 'react'

test('render todolist', () => {
  render(<TodoList />);
  const linkElement = screen.getByText('elete',{ exact:false});
  const linkElement1 = screen.getByText('delete',{ exact:false});
  const linkElement2 = screen.getByText('Delete');
  const linkElement3 = screen.getByText(/Delete/);
  const linkElement4 = screen.getByText(/delete/i);
  const linkElement5 = screen.getByText(/^delete$/i);
  const linkElement6 = screen.getByText(/D?elete/i);
  const linkElement7 =screen.getByText((content, element) => content.startsWith('Dele'));
  screen.debug();
  screen.debug(screen.getByText('Edit'));
  screen.debug(screen.getAllByText('Delete'));
  screen.logTestingPlaygroundURL();
  screen.logTestingPlaygroundURL(screen.getByText('Delete'))

  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
  expect(linkElement5).toBeInTheDocument();
  expect(linkElement6).toBeInTheDocument();
  expect(linkElement7).toBeInTheDocument();
 
});

test('types inside textarea', () => {
  document.body.innerHTML = `<textarea />`

  userEvent.type(screen.getByRole('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})


// const Button = ({ onClick, children }) => (
//   <button onClick={onClick}>{children}</button>
// )

test('click', () => {
  const handleEdit = jest.fn()
  const handleDelete = jest.fn()
  render(<TodoList />)

  expect(handleEdit).toHaveBeenCalledTimes(0);
  expect(handleDelete).toHaveBeenCalledTimes(0)
})
