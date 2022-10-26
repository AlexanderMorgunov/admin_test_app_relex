import { useState, useEffect } from 'react';
import User from '../User/User';

const Users = () => {

    useEffect(() => {
        requestData();
    },[]) 

    const [users, SetUsers] = useState([]);

    const requestData = async () => {
        await import('../../resources/db.js')
        .then(obj => obj.users.forEach(User => SetUsers((users) => [...users, User])));
    }

    const content = users.map(el => <User name={el.name} key={el.id} id={el.id}/>)

    return (
        <ul>
        <div className="h1">Пользователи</div>
        {content}
        </ul>
    )
}

export default Users;