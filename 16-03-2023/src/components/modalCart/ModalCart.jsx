import './index.css'

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
                {cart?.length ? cart.map((res, key) => <div className="ModalCart__text" key={key}>
                    <div className="ModalCart__text-description">
                        <h2>{res.title}</h2>
                        <p>{res.description}</p>
                    </div>
                    <div className="ModalCart__text-priceCat">
                        <p>{res.price}</p>
                        <p>{res.category}</p>
                        <p>{res.qnty}</p>
                        {res ? <img onClick={() => removefromCart(res.id)} height={50} src="https://img.icons8.com/nolan/256/empty-trash.png" alt="chiudere" /> : null}
                        {false}
                    </div>
                </div>) : <p>Il tuo carrello è vuoto</p>}
            </div>
        </div>
    )
}

export default ModalCart