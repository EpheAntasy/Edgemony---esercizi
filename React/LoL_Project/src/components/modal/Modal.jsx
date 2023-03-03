import './index.css'


const Modal = ({ isOpen, setIsOpen, data }) => {

    const closeModal = () => setIsOpen({ visible: false, data: null })

    return isOpen && (
        <div className='Modal'>
            <div onClick={closeModal} className='Modal__overlay' />
            <div style={{ backgroundImage: `url('${data.image.full}')`, backgroundSize: 'cover' }} className='Modal__container'>
                <div className='Modal__int__overlay'></div>
                <div className='Modal__img__text'>
                    <div className='Modal__text__content'>
                        <h2>{data.name}</h2>
                        <h3>{data.title}</h3>
                        <div className='tags'>
                            {data.tags.map((tag, index) => <span key={index}>{tag}</span>)}
                        </div>
                    </div>
                </div>
                <div className='Modal__desc' >
                    <p>{data.blurb}</p>
                </div>
            </div>
        </div >
    )
}

export default Modal