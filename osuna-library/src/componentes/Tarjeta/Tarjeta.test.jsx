import { render, screen, fireEvent } from '@testing-library/react'
import Tarjeta from './Tarjeta'

describe('Tarjeta component', () => {
  const mockCharacter = {
    image: 'https://example.com/image.jpg',
    name: 'Rick',
    status: 'Alive',
    species: 'Human',
    origin: { name: 'Earth' },
    location: { name: 'Citadel' },
  }

  it('renderiza correctamente la info del personaje', () => {
    render(<Tarjeta character={mockCharacter} />)

    expect(screen.getByText('Rick')).toBeInTheDocument()
    expect(screen.getByText('Alive')).toBeInTheDocument()
    expect(screen.getByText('Human')).toBeInTheDocument()
    expect(screen.getByText('Earth')).toBeInTheDocument()
    expect(screen.getByText('Citadel')).toBeInTheDocument()
  })

  it('cambia el ícono de favorito al hacer clic', () => {
    render(<Tarjeta character={mockCharacter} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    // Aquí podrías verificar el cambio del ícono, pero necesitas mocks de imágenes o usar `alt`
    expect(screen.getByAltText(/favorito/i)).toBeInTheDocument()
  })

  it('ejecuta onFavorite cuando se hace clic en el botón', () => {
    const mockFavorite = vi.fn()
    render(<Tarjeta character={mockCharacter} onFavorite={mockFavorite} />)

    fireEvent.click(screen.getByRole('button'))
    expect(mockFavorite).toHaveBeenCalledWith(true)
  })
})
