import React from 'react'

const ListItem = (props) => {
  console.log("HERE",{props})
    return (
        <div>
            <li className="list-group-item">
                <a href={props.article.web_url}>{props.article.lead_paragraph}</a>
                <br />
                <button>Save Article</button>
            </li>
        </div>
    )
};

export default ListItem
