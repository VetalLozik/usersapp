import React from 'react'
import Services from '../../services/services'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../../actions/users-action'


class EditPost extends React.Component {
    state = {
        title: '',
        body: ''
    }
    
    onSubmit = async (e) => {
        e.preventDefault()
        const service = new Services()
        const { title, body } = this.state
        const {postId, postLoaded, history} = this.props
        const userId = await service.getUser(postId)
            .then(data=> data.userId)
            .catch(err=> console.log(err))
        
        const data ={
            title,
            body,
            postId,
            userId 
        }
        await service.editPost(data)
            .then(response=>{
                this.setState({
                    email: '',
                    password: ''
                })
                postLoaded(response)
                history.push(`/comments/postId/${response.id}`)
            })
            .catch(err=> console.log(err));
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return (

            <div className="row">
                <form className="col s6 offset-s3" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="title" name="title" onChange={this.onChange} className="materialize-textarea"></textarea>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="body">Text</label>
                            <textarea name="body" id="body" onChange={this.onChange} className="materialize-textarea"></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">Edit</button>
                    </div>
                </form>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        postLoaded: (post) =>dispatch(getPost(post))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(EditPost))
