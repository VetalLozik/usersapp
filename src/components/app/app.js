import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../navbar'
import UserPostsList from '../user-posts-list'
import Details from '../details' 
import EditPost from '../edit-post'
import {HomePage, UsersPage} from '../pages'
import store from '../../store'


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/users' component={UsersPage}/>
                        <Route path = "/posts/userId/:id" 
                            render={ ( { match } )=>{
                                const { id } = match.params
                                return <UserPostsList postsId={id}/>
                            }} />
                        <Route exact path = "/comments/postId/:id" 
                            render={ ( { match } )=>{
                                const { id } = match.params
                                return <Details postId={id}/>
                            }} />
                        <Route path = "/comments/postId/edit/:id" 
                            render={ ( { match } )=>{
                                const { id } = match.params
                                return <EditPost postId={id}/>
                            }} />
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        </Provider> 
    )
}

export default App
