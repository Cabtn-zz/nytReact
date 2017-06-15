import React from 'react'

const ListItem = (props) => {
  console.log("HERE",{props})
    return (
        <li>
            <span>{props.article.web_url}</span>
            <br />
            <span>{props.article.news_desk}</span>
            <br />
            <button>SAVE ME BABY ONE MORE TIME</button>
        </li>
    )
};

export default ListItem
