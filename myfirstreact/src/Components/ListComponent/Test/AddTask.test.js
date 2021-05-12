import { render, screen } from '@testing-library/react';
import {getByLabelText } from '@testing-library/dom';
import AddTask from '../../AddTask';
import React from 'react'
test('render add task', () => {
    render(<AddTask />);
    const linkElement = screen.getByText('Add');
    const inputNode1 = screen.getByLabelText('Name')

    expect(linkElement).toBeInTheDocument();
    expect(inputNode1).toBeInTheDocument();
  
  });
  test('on change', () => {
    const isChangedName = jest.fn();
    const handleAddTask = jest.fn()
    render(<AddTask />)
  
    expect(isChangedName).toHaveBeenCalledTimes(0);
    expect(handleAddTask).toHaveBeenCalledTimes(0)
  })