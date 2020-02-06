import React from 'react'
import {Link} from 'react-router-dom'

const UserPost = ({post}) => {
    const {title, body, id} = post
    const link = `/comments/postId/${id}`
    return (
            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">{title}</span>
                            <span className="card-title">{body}</span>
                        </div>
                        <div className="card-action">
                            <Link to={link}>Details</Link>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default UserPost