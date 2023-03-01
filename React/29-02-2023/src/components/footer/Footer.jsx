import './index.css'
import logo from '../../logo.png'

const Footer = () => {
    return (
        <footer className="Footer">
            <img className="Footer__logo" src={logo} alt="logo" />
            <p>Copyright &copy; 2021</p>
        </footer>
    )
}

export default Footer