import { screen } from '@testing-library/react';
import SearchForm from '.';


describe('SearchForm', () => {
    const mockFunc = jest.fn();
    beforeEach(() => render(<SearchForm searchForUser={mockFunc}/>))
    
    test('it renders a button', () => {
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('it renders a input', () => {
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    test('it renders a form', () => {
        expect(screen.getByRole('form', {name:'search'})).toBeInTheDocument()
    })
    
    test('it triggers handle submit on submit', () => {

        const submitButton = screen.getByRole('button');
        userEvent.click(submitButton);
        expect(mockFunc).toHaveBeenCalledTimes(1);

    })
})


