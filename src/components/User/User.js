import { useState } from "react";
import AddMenu from "../AddMenu/AddMenu";

const User = ({name, id}) => {

const [addMenu, setAddMenu] = useState(false);

const handleAddMenu = () => {
    !addMenu ? setAddMenu(addMenu => true) : setAddMenu(addMenu => false);
}

let content = addMenu ? <AddMenu id={id}/> : null;

    return (
        <div>
        <li key={id}>
            <span className="col-7 h2">{name}</span>
            <button className="btn btn-outline-light" onClick={handleAddMenu}>Статистика по тестам</button>
        </li>
        {content}
        </div>
    )
}

export default User;

