import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('button has correct initial text and color', () => {
    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});

    expect(colorButton).toHaveStyle({backgroundColor: 'red'});

    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
    expect(colorButton.textContent).toBe('Change to red');
});
