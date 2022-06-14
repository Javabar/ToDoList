import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

it('should have a h1 as the main header element', () =>{
    render(<App />);
    const headingElementType = screen.getByText(/Todo List/i)
    expect(headingElementType).toContainHTML('h1');
  })