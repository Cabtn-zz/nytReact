import React from 'react'

const ListItem = (props) => {
  console.log("HERE",{props})
    return (
        <div>
            <li className="list-group-item">
                <a href={props.article.web_url}>{props.article.lead_paragraph}</a>
                <br />
                <button onClick={() => props.saveArticle(props.article.lead_paragraph, props.article.web_url) }>Save Article</button>
            </li>
        </div>
    )
};

export default ListItem
