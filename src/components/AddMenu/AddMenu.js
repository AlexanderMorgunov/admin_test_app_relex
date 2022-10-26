import { useState, useEffect } from 'react';
import TestInfo from '../TestInfo/TestInfo.js';

const AddMenu = ({id}) => {

const [tests, setTests]  = useState();
const [currentTest, setCurrentTest] = useState('Знание ООП');
const [loading, setLoading] = useState(true);

useEffect(() => {
    requestData(id)
    .then(result => setTests(result))
    .then(setLoading(false));

},[]);

const getItem = () => {
    const options = tests.map(({id, title}) => <option key={id} value={title}>{title}</option>);
    return options
    
}

const optionsItem = !loading ? getItem() : null;

const requestData = async (id) => {
    let res = await import('../../resources/db.js');
    let result = await res.users.filter(user => (user.id === id))[0].tests;
    return result;
}

    return (
        <>
         <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={e => {
        setCurrentTest(e.target.value)}}>
        {optionsItem}
         </select>
        <TestInfo id={id} currentTest={currentTest}/>
        </>
    )    
}





export default AddMenu;