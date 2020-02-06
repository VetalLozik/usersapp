import React from 'react'
import {Link} from 'react-router-dom'

const User = ({user}) => {
    const {name, username, email, website, company, id} = user
    const link = `/posts/userId/${id}`
    return (
            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card card blue-grey darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Name: {name}</span>
                            <span className="card-title">User name: {username}</span>
                            <span className="card-title">Email: {email}</span>
                            <span className="card-title">Website: {website}</span>
                            <span className="card-title">Company: {company.name}</span>
                        </div>
                        <div className="card-action">
                            <Link to={link}>Posts</Link>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default User
