import React from 'react'

const SavedItem = (props) => {
  console.log("HERE",{props})
    return (
        <div>
            <li className="list-group-item">
                <a href={props.article.link}>{props.article.title}</a>
                <br />
                <button onClick={(id) => {this.props.deleteArticle(props.id)} }>Delete Article</button>
            </li>
            <br />
        </div>
    )
};

export default SavedItem
