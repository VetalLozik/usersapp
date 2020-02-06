import React, { Component } from 'react'
import { getPost } from '../../actions/users-action'
import { connect } from 'react-redux'
import Services from '../../services/services'

export class Post extends Component {
    componentDidMount(){
        const {postId, postLoaded} = this.props
        const service = new Services()
        service.getPost(postId)
            .then(data=> {
                postLoaded(data)
            })
            .catch(err=> console.log(err))
    }

    render() {
        
        const {title, body} = this.props.post

        return (
            <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>{body}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        post: state.post.post
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        postLoaded: (post) =>dispatch(getPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

