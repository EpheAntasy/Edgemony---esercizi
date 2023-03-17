import './index.css'
import trash_static  from '../../assets/img/trash_static.png'
import trash from '../../assets/img/trash.gif'

const ModalCart = ({ cart, setCart, modalCartVisible, setModalCartVisibility }) => {

    const closeModal = () => {
        setModalCartVisibility(false)
    }

    const removefromCart = (id) => {
        let removedCart = [...cart]
        const findCart = removedCart.find(item => item.id === id)
        if (findCart?.qnty > 1) {
            removedCart = removedCart.map(item => {
                if (item.id === id) {
                    item.qnty--
                }
                return item
            })
        } else {
            removedCart = removedCart.filter(item => item.id !== id)
        }
        localStorage.setItem("cartlist", JSON.stringify(removedCart))
        setCart(removedCart)
    }

    return modalCartVisible && (
        <div className="ModalCart" >
            <div onClick={closeModal} className="ModalCart__overlay"></div>
            <div className="ModalCart__container">
                <h2>Il tuo carrello:</h2>
                {cart?.length ? cart.map((res, key) => <div className="ModalCart__content" style={{ backgroundImage: `url(${res.images[0]})`, backgroundPosition: "center" }} key={key}>
                    <div className="ModalCArt__int-overlay"></div>
                    <div className="ModalCart__wrapper">
                        <h3>{res.title}</h3>
                        <div className="ModalCart__text-wrapper">
                            <div className="ModalCart__price-info">
                                <p>Prezzo: {res.price} €</p>
                                <p className="category" >Categoria: {res.category}</p></div>
                            <div className="ModalCart__qntyImg"><p>Quantità: {res.qnty}</p>
                                <img className="static" src={trash_static} alt="eliminare" />
                                {res ? <img onClick={() => removefromCart(res.id)} className='animated' src={trash} alt="eliminare" /> : null}
                                {false}
                            </div>
                        </div>
                    </div>
                </div>) : <p>Il tuo carrello è vuoto</p>}
                <hr />
                <div className="ModalCart__total-priceQuant">
                    <h4>Numero articoli: {cart ? cart.reduce((accumulator, currentValue) => accumulator + currentValue.qnty, 0) : 0} </h4>
                    <h4>Prezzo totale: {cart ? cart.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.qnty, 0) : 0} €</h4>
                </div>
            </div>
        </div>
    )
}

export default ModalCart