import './index.css'
import { useState, useEffect } from 'react'
// import { champions } from '../../mocks/champions'
import Card from '../card'


const ChampCard = ({ setIsOpen }) => {

    const [championsData, setChampionsData] = useState([])

    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/13.4.1/data/it_IT/champion.json')
            .then(res => res.json()).then(fetchedData => {
                const { data } = fetchedData
                const champions = Object.values(data).map((champion) => {
                    champion.image.sprite = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`
                    champion.image.full = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
                    return champion
                })
                setChampionsData(champions)
            });
    }, [])

    return (
        <div className="ChampCard">
            <h2>Campioni</h2>
            <div className="ChampCard__container">
                {championsData.map((champion) => (
                    <Card setIsOpen={setIsOpen} championData={champion} key={champion.id} />
                ))}
            </div>
        </div>
    )
}

export default ChampCard
