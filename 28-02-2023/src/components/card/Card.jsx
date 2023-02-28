import './index.css'

const Card = ({championData}) => {
    return (
        <div className="Card" key={championData.id}>
            <h2>{championData.name}</h2>
            <img src={championData.icon} alt="immagine" />
            <br />
            <div className='Tags'>
            <span>{championData.tags[0]}</span>
            <span>{championData.tags[1]}</span>
            </div>
        </div>)
}

export default Card