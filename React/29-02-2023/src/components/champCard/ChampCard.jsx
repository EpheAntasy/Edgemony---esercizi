import './index.css'
import { champions } from '../../mocks/champions'
import Card from '../card'


const ChampCard = () => {
    return (
        <div className="ChampCard">
            <h2>Champions</h2>
            <div className="ChampCard__container">
                {champions.map((champion) => (
                    <Card championData={champion} key={champion.id} />
                ))}
            </div>
        </div>
    )
}

export default ChampCard
