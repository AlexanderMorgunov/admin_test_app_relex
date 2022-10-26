import {Link, NavLink} from 'react-router-dom';
import './AppHeader.css'

const AppHeader = ({exitLog}) => {
    return (
        <>
        <header className="app__header">
            <h1 className="app__title">
            Консоль системы тестирования
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink
                         end 
                         style={({isActive}) => ({color: isActive ? '#bb2d3b' : 'inherit'})}
                         to ="/">Пользователи</NavLink></li>
    
                    <li><NavLink 
                         end 
                         style={({isActive}) => ({color: isActive ? '#bb2d3b' : 'inherit'})}
                         to="/tests">Тесты</NavLink></li>
                </ul>
            </nav>
        </header>
        <div className="containerExitBtn"><button className='btn btn-danger' onClick={exitLog}>Выход</button></div>
        </>
    )
}

export default AppHeader;