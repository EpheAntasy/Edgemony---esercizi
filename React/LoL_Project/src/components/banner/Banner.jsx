import './index.css'

const Banner = ({ image, alt, title, isImgRight, isTitleRight }) => {
    return (
        <div className='Banner'>
            <img className={isImgRight ? 'imgRight' : 'imgLeft'} src={image} alt={alt} />
            <h3 className={isTitleRight ? 'titleRight' : 'titleLeft'}>{title}</h3>
        </div>
    )
}

export default Banner