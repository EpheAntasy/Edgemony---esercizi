import './index.css'
import Button from '../button'


const Card = ({ setIsOpen, championData }) => {
    const onClickDetails = () => setIsOpen({ visible: true, data: championData })

    return (
        <div className="Card" key={championData.id}>
            <h2>{championData.name}</h2>
            <img src={championData.icon} alt="immagine" />
            <br />
            <Button text="Details" onClickFun={onClickDetails} />
        </div>)
}

export default Card