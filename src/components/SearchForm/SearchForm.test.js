import { screen } from '@testing-library/react';
import SearchForm from '.';


describe('SearchForm', () => {
    beforeEach(() => render(<SearchForm/>))
    
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

        const handleSubmit = jest.fn()
        const form= screen.getByRole('form')
        userEvent.submit(form)
        expect(handleSubmit).toHaveBeenCalledTimes(1)

    // need to work on this

    })
})


