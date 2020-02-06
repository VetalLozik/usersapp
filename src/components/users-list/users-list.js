import React, { Component } from 'react'
import Services from '../../services/services'
import {getUsers} from '../../actions/users-action'
import User from '../user'
import Loader from '../loader'

import { connect } from 'react-redux'

class UsersList extends Component {
    
    componentDidMount(){
        const {usersLoaded} = this.props
        const service = new Services()
        service.getUsers()
            .then(data=> {
                usersLoaded(data)
            })
            .catch(err=> console.log(err))
    }
    render() {
        const {users, loading} = this.props.users
        if(loading){
            return <Loader />
        }

        return (
            <div className="users-list">
                {users && users.map(user => {
                    return(
                        <User user={user} key={user.id}/>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        usersLoaded: (users) => dispatch(getUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
