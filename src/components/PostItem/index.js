import React from 'react';
import './utils/API';
import API from '../../utils/API';

class UserTest extends React.Component {
    componentDidMount(){
        user = {
            name: "Sofia"
        };
        API.createUser(user)
        .then()
        .catch(err => console.log(err))
    }
    render () {
        return ('hello')
    }
}

export default UserTest; 