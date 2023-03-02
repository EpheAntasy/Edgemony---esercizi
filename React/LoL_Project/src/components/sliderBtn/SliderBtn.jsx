import './index.css'

const SliderBtn = ({text, onClickFun}) => {
    return (
        <button className="SliderBtn" onClick={onClickFun}>{text}</button>
    )
}

export default SliderBtn