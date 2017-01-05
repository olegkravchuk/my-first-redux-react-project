import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'

class App extends Component {
    render(){
        return (
            <div className='row'>
                <Page data={this.props.page} getPhotos={this.props.pageActions.getPhotos}/>
                <User data={this.props.user} handleLogin={this.props.userActions.handleLogin}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch){
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)