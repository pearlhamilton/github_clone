import { screen } from '@testing-library/react';
import Home from '.';


describe('Home', () => {
    beforeEach(() => render(<Home />))
    
    test('it has a heading', () => {
            expect(screen.getByRole('heading')).toBeInTheDocument()
        
    })
        

    test('it the heading to contain the text Github', () => {
        expect(screen.getByRole('heading').textContent).toContain('Github')
    })


})


