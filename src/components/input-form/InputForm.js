import { useState } from "react";
import './InputForm.css'


const InputForm = ({log, isLogged, exitLog}) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === 'Administrator' && password === '12345') {
            e.target[0].className = e.target[0].className.replace(' invalid-data', '');
            e.target[1].className = e.target[1].className.replace(' invalid-data', '');
            localStorage.setItem('isLogIn', true);
            log();
        } else if(name !== 'Administrator' && password !== '12345') {
            e.target[0].className +=' invalid-data';
            e.target[1].className +=' invalid-data';
        } else if(name !=='Administrator') {
            e.target[1].className = e.target[1].className.replace(' invalid-data', '');
            e.target[0].className+=' invalid-data';
            e.target[0].placeholder = 'Неверный логин';
        } else if(password !=='12345') {
            e.target[0].className = e.target[0].className.replace(' invalid-data', '');
            e.target[1].className+=' invalid-data';
            e.target[1].placeholder = 'Неверный пароль';
        }
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onPassChange = (e) => {
        setPassword(e.target.value);
    }


    return(
        <div className="input-form">
        <form onSubmit={onSubmit}>
            <input type='text' 
                name={'name'}
                placeholder="Введите имя пользователя" 
                value={name}
                onChange={onNameChange}
                className='input-name'
            />
            <input type="password" 
                name={'password'}
                placeholder="Введите пароль" 
                value={password}
                onChange={onPassChange}
            />
            <button type="submit" className="btn btn-outline-light">Вход</button>
        </form>
        </div>
    )
}

export default InputForm;