import './index.css'


const Modal = ({ isOpen, setIsOpen, data }) => {

    const closeModal = () => setIsOpen({ visible: false, data: null })

    return isOpen && (
        <div className='Modal'>
            <div onClick={closeModal} className='Modal__overlay' />
            <div className='Modal__container'>
                <div className='Modal__img__text'>
                    <div className='Modal__text__content'>
                        <h2>{data.name}</h2>
                        <h3>{data.title}</h3>
                        <div className='tags'>
                            {data.tags.map((tag, index) => <span key={index}>{tag}</span>)}
                        </div>
                    </div>
                    <img src={data.icon} alt={data.name} />
                </div>
                <div className='Modal__desc' >
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal