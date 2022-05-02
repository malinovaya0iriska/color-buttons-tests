import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelCaseWithSpaces} from './App';

test('button has correct initial text and color', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
    expect(colorButton.textContent).toBe('Change to red');
});

test("button's and checkbox's inital states", () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    const checkbox = screen.getByRole('checkbox');

    expect(colorButton).toBeEnabled();
    expect(checkbox).not.toBeChecked();
});

test('dependency of the button from checkbox value', ()=>{
    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(colorButton).not.toBeEnabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(colorButton).toBeEnabled();
});

test('add disabled button grey color', ()=>{
    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
 
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

});

describe('divide words with "camel case" with spaces into several words', ()=>{
expect(replaceCamelCaseWithSpaces('Green')).toBe('Green');
expect(replaceCamelCaseWithSpaces('MiddleGray')).toBe('Middle Gray');
expect(replaceCamelCaseWithSpaces('PurpleRedWhite')).toBe('Purple Red White');
})