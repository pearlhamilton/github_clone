import { screen } from '@testing-library/react';
import Header from '.';


describe('Header', () => {
    beforeEach(() => render(<Header/>))
    
    test('it renders a header tag', () => {
         expect(screen.getByRole('banner')).toBeInTheDocument()
        
    })
        
    test('it renders an image tage', () => {
        expect(screen.getByRole('img')).toBeInTheDocument()
    })

    test('img has src of ./github.png and alt of github logo', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt','github logo')
    
})
})


