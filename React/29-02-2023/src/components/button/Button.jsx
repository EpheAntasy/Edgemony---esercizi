import './index.css'

const Button = ({text, onClickFun}) =>{
    return(
        <button className="Button"  onClick={onClickFun}>{text}</button>
)}

export default Button