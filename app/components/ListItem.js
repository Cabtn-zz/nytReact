import React from 'react'

const ListItem = ({article}) => {
    return (
        <li>
            <span>{article.name}</span>
            <br />
            <span>{ artile.link }</span>
            <br />
            <button>SAVE ME BABY ONE MORE TIME</button>
        </li>
    )
};

export default ListItem
