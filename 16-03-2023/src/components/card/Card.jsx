import { shortDescription } from "../../utils/func";
import "./index.css";

const Card = ({ productData, setCart }) => {

// devo sistemare il controllo sui duplicati in quanto risulta sballato
  const onAddCart = () => {
    setCart((prev) => {
      let addedCart = [...prev]
      const findCart = addedCart.find(item => item.id === productData.id)
      if (findCart) {
        addedCart = addedCart.map(item => {
          item.qnty = item.qnty + .5
          return item
        })
      } else {
        addedCart = [...prev, productData]
      }
      localStorage.setItem("cartlist", JSON.stringify(addedCart))
      return addedCart
    })
  }

  return (
    <div className="Card">
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__text">
        <h3 className="Card__text--title">{productData.title}</h3>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        <p className="Card__text--cat">{productData.category}</p>
        <div className="Card__text--priceCart">
          <p className="Card__text--price">$ {productData.price}</p>
          <img onClick={onAddCart} src="https://img.icons8.com/nolan/256/shopping-cart.png" alt="aggiungi al carrello" />
        </div>
      </div>
    </div>
  );
};

export default Card;
