import React from 'react';
import SignBox from './SignBox';
import LoginText from './LoginText';
import './SignUp.css';

class SignUp extends React.Component {
    render() {
        return (
            <div className="sign_up">                    
                <SignBox mainText="Cadastrar"/>
                <LoginText />
            </div>
        );
    }
}

export default SignUp;