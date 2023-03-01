import './index.css'

const Banner = ({ image, alt, title, isImgRight }) => {
    return (
        <div className='Banner'>
            <img className={isImgRight ? 'imgRight' : 'imgLeft'} src={image} alt={alt} />
            <h3>{title}</h3>
        </div>
    )
}

export default Banner