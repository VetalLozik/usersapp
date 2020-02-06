import React, { Component } from 'react'
import Services from '../../services/services'
import {getUserPosts} from '../../actions/users-action'
import UserPost from '../user-post'
import Loader from '../loader'
import Modal from '../modal'

import { connect } from 'react-redux'

class UserPostsList extends Component {

    componentDidMount(){
        const {postsId, userPostsLoaded} = this.props
        const service = new Services()
        service.getUserPosts(postsId)
            .then(data=> {
                userPostsLoaded(data)
            })
            .catch(err=> console.log(err))
    }

    render() {
        const {userPosts, loading} =this.props.userPost
        if(loading){
            return <Loader />
        }
        
        return (
            <div>
                {userPosts && userPosts.map(post => {
                    return(
                        <UserPost post={post} key={post.id}/>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        userPost: state.userPosts
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        userPostsLoaded: (posts) => dispatch(getUserPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPostsList)

