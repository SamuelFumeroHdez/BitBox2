import React from 'react';

export const GridUserItem = ({ id, name, country }) => {
    console.log(id, name, country);
    return (
        <div className="card">
            <h1>{name}</h1>
            <p>{country}</p>
        </div>
    )

}

export default GridUserItem;