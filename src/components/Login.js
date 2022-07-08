import React from 'react';
import LoginText from './LoginText';
import './Login.css';
import LoginBox from './LoginBox';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <LoginBox mainText="Entrar"/>
                <LoginText />
            </div>
        );
    }
}

export default Login;