import './index.css'
import Button from '../button'


const Card = ({championData}) => {
    const onClickRole = () => {
        alert(`Champions role: ${championData.tags[0]}${championData.tags[1]? `, ${championData.tags[1]}`: ''}`)
    }

    return (
        <div className="Card" key={championData.id}>
            <h2>{championData.name}</h2>
            <img src={championData.icon} alt="immagine" />
            <br />
            <Button text="Role" onClickFun={onClickRole}/>
        </div>)
}

export default Card