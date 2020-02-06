import React, { Component } from 'react'
import { getComments } from '../../actions/users-action'
import Comment from '../comment'
import Post from '../post'
import { connect } from 'react-redux'
import Services from '../../services/services'
import {Link, withRouter} from 'react-router-dom'

export class Details extends Component {
    componentDidMount(){
        const { postId, commentsLoaded } = this.props
        const service = new Services()
        service.getComments(postId)
            .then(data=> {
                commentsLoaded(data)
            })
            .catch(err=> console.log(err))
    }

    onDelete = async (e) =>{
        e.preventDefault()
        const { postId, history } = this.props
        const service = new Services()
        await service.deletePost(postId)
        const userId = await service.getUser(postId)
            .then(data=> data.userId)
            .catch(err=> console.log(err))

        history.push(`/posts/userId/${userId}`)
    }

    render() {
        const {comments,postId} = this.props
        const editLink = `/comments/postId/edit/${postId}`
        return (
            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-2">
                        <Post postId={postId}/>
                        <div className="card-action">
                            <Link to={editLink}>Edit</Link>
                            <a href="/delete" onClick={this.onDelete}>Delete</a>
                        </div>
                        <ul className="collection">
                            {comments && comments.map(comment => {
                                return(
                                    <Comment comment={comment} key={comment.id}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        comments: state.comments.comments,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        commentsLoaded: (comments) => dispatch(getComments(comments)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details))

