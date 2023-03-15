import { useState, useEffect } from "react";
import { GET } from "../../utils/http"
import MiniCard from "../miniCard/MiniCard";
import './index.css'

const MiniCardList = ({ value }) => {
    const [miniCards, setMiniCards] = useState([]);

    useEffect(() => {
        if (value) GET(`/products/category/${value}`).then((data) => setMiniCards(data.products));
        else GET(`/products`).then((data) => setMiniCards(data.products));
    }, [value]);

    return (
        <div className="App__miniCards" >
            {miniCards.length ? miniCards.map((card) => (
                <MiniCard imgSrc={card.thumbnail}
                    imgAlt={card.title} key={card.id} />
            )) : <p>Non esistono prodotti per questa categoria...</p>}
        </div >
    )
}

export default MiniCardList