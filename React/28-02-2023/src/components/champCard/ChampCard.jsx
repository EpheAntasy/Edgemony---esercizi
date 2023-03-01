import './index.css'
import {champions} from '../../mocks/champions'
import Card from '../card'


const ChampCard = () =>{
    return(
        <div className="ChampCard">
            {champions.map((champion) =>(
            <Card championData={champion} key={champion.id} />
            ))}
        </div>
    )
}

export default ChampCard
