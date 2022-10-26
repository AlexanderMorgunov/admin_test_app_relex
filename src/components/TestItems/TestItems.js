import { useEffect, useState } from 'react';
import TestItem from '../TestItem/TestItem.js';


const TestItems = () => {

const [test, setTest] = useState([]);

useEffect(() => {
    requestData();
},[]) 

    const requestData = async () => {
        await import('../../resources/db.js')
        .then(obj => obj.tests.forEach(Test => setTest((test) => [...test, Test])));
    }


    const deleteElement = (id) => {
        setTest(() => test.filter(el => el.id !== id));
    }

    
    const content = test.map(el => <TestItem title={el.title} key={el.id} deleteElement={() => deleteElement(el.id)}/>)


    return(
        <ul className='TestItems p-0'>{content}</ul>
    )
}

export default TestItems;