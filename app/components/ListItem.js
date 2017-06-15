import React from 'react'

const ListItem = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <br />
            <span>{ props.link }</span>
        </li>
    )
};

export default ListItem