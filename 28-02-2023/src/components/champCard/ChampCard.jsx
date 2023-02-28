import './index.css'
import {champions} from '../../mocks/champions'
import Card from '../card'


const ChampCard = () =>{
    return(
        <div className="ChampCard">
            {champions.map((champion) =>(
            <Card championData={champion} />
            ))}
        </div>
    )
}

export default ChampCard
