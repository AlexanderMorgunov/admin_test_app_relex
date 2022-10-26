import './TestItem.css';

const TestItem = ({title, deleteElement}) => {
    return (
        <li className='list-group-item d-flex'>
            <span className="list-group-item-label">{title}</span>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="border m-2">
                <label htmlFor="checkbox" className='m-.5'>Отключить тест?</label>
                <input type="checkbox" className="form-check-input m-3" name='checkbox'></input>
                </div>
                
                <button onClick={deleteElement} type="button" className="btn-trash btn-sm "> <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
        
    )
}
export default TestItem;
