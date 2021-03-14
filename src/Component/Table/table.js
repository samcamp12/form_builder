import React from 'react';
import './table.css';

const Table = (props) => {
    return(
        <div className="table-container">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Table;