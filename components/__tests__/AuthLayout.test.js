import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthLayout } from '../layouts'

describe('AuthComponent', () => {
  it('renders login form', () => {
    render(<AuthLayout />);
    
    const emailInput = screen.getByPlaceholderText('correo');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Login');
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('performs login', () => {
    render(<AuthLayout />);
    
    const emailInput = screen.getByPlaceholderText('correo');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('register');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // You can add assertions here to check for successful login behavior
  });
});
