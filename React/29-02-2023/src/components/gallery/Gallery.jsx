import { images } from '../../mocks/gallery'
import './index.css'

const Gallery = () => {
    return (
        <div className="Gallery">
            <h2>Game Mode</h2>
            <div className="Gallery__container">
                {images.map((image, index) => (
                    <div className="Gallery__items" key={index}>
                        <h3>{image.title}</h3>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery