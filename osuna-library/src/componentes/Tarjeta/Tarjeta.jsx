import './Tarjeta.css'
import favFilled from '../../assets/images/icons/favorite-filled.svg'
import favEmpty from '../../assets/images/icons/favorite-empty.svg'
import checkIcon from '../../assets/images/icons/check.svg'
import avatarPlaceholder from '../../assets/images/placeholders/avatar_placeholder.jpg'
import { useState } from 'react'

function Tarjeta({ onFavorite, character, onClick }) {

    if ( !character ){
        character = {
            image: avatarPlaceholder,
            name: "Unknown",
            status: "Uknown",
            species: "Unknown",
            origin: {
                name: "Unknown",
            },
            location: {
                name: "Unknown",
            },
        }
    }
    let { image, name, species, status, origin, location } = character

    const [isFav, setIsFav] = useState(false)

    const handleFavorite = (e) => {
        e.stopPropagation();
        setIsFav(!isFav)
        if (onFavorite) onFavorite(!isFav) // Emitir el evento al padre
    }

    return (
        <div className="tarjeta" onClick={onClick}>
            <div className='imagen-tarjeta-contenedor'>
                <img className='imagen-tarjeta' src={image} alt={name} />
                <button className="fav-button" onClick={handleFavorite}>
                    {isFav ? <img src={favFilled} alt="Personaje favorito" /> : <img src={favEmpty} alt="Personaje no es favorito" />}

                </button>
            </div>
            <div className='info-tarjeta'>
                <div className='info-name-status-species'>
                    <div className='info-name-status'>
                        <h3 className='h3'>{name}</h3>
                        <div className='etiqueta-status'>
                            <img src={checkIcon} alt="Check icon" />
                            <p className='body-s text-primary-100'>{status}</p>

                        </div>

                    </div>
                    <p className='body-s'>{species}</p>
                </div>
                <div className='info-origin-location'>
                    <div className='info-ori-loc'>
                        <p className='h5 text-neutral-400'>Last known location</p>
                        <p className='body-s text-neutral-600'>{location?.name}</p>
                    </div>
                    <div className='info-ori-loc'>
                        <p className='h5 text-neutral-400'>First seen in</p>
                        <p className='body-s text-neutral-600'>{origin?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta


