import { render, screen } from '@testing-library/react';
import {getByLabelText } from '@testing-library/dom';
import AddTask from '../../AddTask';
import React from 'react'
test('render add task', () => {
    render(<AddTask />);
    const linkElement = screen.getByText('Add');
    const inputNode1 = screen.getByLabelText('Name')
    const inputNode = screen.getByLabelText('Name', { selector: 'input' })
    const element = screen.getByTestId('custom-element');

    expect(linkElement).toBeInTheDocument();
    expect(inputNode1).toBeInTheDocument();
    expect(inputNode).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  
  });
  test('on change', () => {
    const isChangedName = jest.fn();
    const handleAddTask = jest.fn()
    render(<AddTask />)
  
    expect(isChangedName).toHaveBeenCalledTimes(0);
    expect(handleAddTask).toHaveBeenCalledTimes(0)
  })