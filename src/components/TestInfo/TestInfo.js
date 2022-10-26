import { useState, useEffect } from "react";

const TestInfo = ({id, currentTest}) => {

const [loading, setLoading] = useState(true);
const [testInfo, setTestInfo] = useState();

useEffect(() => {
    getTestInfo(id)
    .then(result => setTestInfo(result.filter(el => el.title === currentTest)[0].attempts))
    .then(setLoading(false))
},[]);

useEffect(() => {
    getTestInfo(id)
    .then(result => setTestInfo(result.filter(el => el.title === currentTest)[0].attempts))
    .then(setLoading(false))
},[currentTest])


const getTestInfo = async (id) => {
    let res = await import('../../resources/db.js');
    let testsArray = res.users.filter(user => (user.id === id))[0].tests;
    return testsArray;
}

const getItem = () => {

    const attempts = testInfo.length;
    const successAttempts = testInfo.filter(el => el.result === 'success').length;
    const avarageGrade = () => {
        let count = 0;
        testInfo.forEach(el => {
            count += el.mark;
        })
        let res = count / testInfo.length;
        return res
    }

        const tableTest = (
            <table className="table">
            <tbody>
                <tr>
                <th scope="row">Всего попыток</th>
                <td>{attempts}</td>
                </tr>
                <tr>
                <th scope="row">Успешных попыток %</th>
                <td>{successAttempts / testInfo.length * 100}%</td>
                </tr>
                <tr>
                <th scope="row">Cредний балл</th>
                <td>{Math.round(avarageGrade())}</td>
                </tr>
            </tbody>
        </table>
        )
    return tableTest;

}

const tableTestInfo = !loading ? getItem() : null;

    return (
        tableTestInfo
    )
}

export default TestInfo