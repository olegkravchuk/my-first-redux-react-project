import React, {Component, PropTypes} from 'react'


export default class User extends Component {
    render(){
        const {name} = this.props.data;
        return (
            <div>
                <p>It is work, {name}</p>
            </div>
        )
    }
}

User.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

