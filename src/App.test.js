import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelCaseWithSpaces} from './App';

test('button has correct initial text and color', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test("button's and checkbox's inital states", () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
    const checkbox = screen.getByRole('checkbox');

    expect(colorButton).toBeEnabled();
    expect(checkbox).not.toBeChecked();
});

test('dependency of the button from checkbox value', ()=>{
    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
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
    const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
 
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

});

describe('divide words with "camel case" with spaces into several words', ()=>{
    test('works for no inner capital letters', ()=>{
        expect(replaceCamelCaseWithSpaces('Green')).toBe('Green');
    });
    test('works for one inner capital letters', ()=>{
        expect(replaceCamelCaseWithSpaces('MiddleGray')).toBe('Middle Gray');
    });
    test('works for several inner capital letters', ()=>{
        expect(replaceCamelCaseWithSpaces('PurpleRedWhite')).toBe('Purple Red White');
    });
})