import React from 'react'

const Comment = ({comment}) => {
    const {email, body} = comment
    return (

        <li className="collection-item avatar">
            <span className="title">{email}</span>
            <p>{body} </p>
        </li>
    )
}

export default Comment
