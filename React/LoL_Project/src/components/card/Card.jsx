import './index.css'



const Card = ({ setIsOpen, championData }) => {
    const onClickDetails = () => setIsOpen({ visible: true, data: championData })

    return (
        <div onClick={onClickDetails} style={{ backgroundImage: `url('${championData.image.sprite}')` }} className="Card" key={championData.name}>
            <h2>{championData.name}</h2>
        </div>)
}

export default Card