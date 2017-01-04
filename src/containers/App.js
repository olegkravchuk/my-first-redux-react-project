import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render(){
        return (
            <div>
                <User data={this.props.user}/>
                <Page data={this.props.page} selectYear={this.props.pageActions.selectYear}/>
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
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)