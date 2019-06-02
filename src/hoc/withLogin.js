import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import { Auth } from 'aws-amplify';

class WithLogin extends Component

const withLogin = WrappedComponent => props => {
    Auth.currentAuthenticatedUser().then(res => {
        
    })
}