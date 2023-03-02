import './index.css'
import logo from '../../logo.png'

const Header = ({ setNightMode }) => {
    return (
        <div className='Header'>
            <div className='Header__left__cont'>
                <div className='Header__logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='Header__menu'>
                    <ul>
                        <li><a href='https://www.leagueoflegends.com/it-it/'>League of Legends</a></li>
                        <li><a href='https://www.leagueoflegends.com/it-it/news/'>News</a></li>
                        <li><a href='https://www.leagueoflegends.com/it-it/news/tags/patch-notes/'>Patch</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="sole" alt="" />
                <label className="switch">
                    <input onChange={(e) => setNightMode((e)=>!e)} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <img src="luna" alt="" />
            </div>
        </div >
    )
}

export default Header