import { render, screen ,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TaskList from '../../TaskList';
import React, { createContext } from 'react'
test('render add task', () => {
    render(<TaskList />);
    const linkElement = screen.getByText('AddList');
    expect(linkElement).toBeInTheDocument();
  
  });
  // test('render task list', () => {
  //   const setStatus = jest.fn()
    
  //   render(<TaskList />)
  
  //   expect(setStatus).toHaveBeenCalledTimes(0);
  // })
  