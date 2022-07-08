import React from 'react';
import Fade from 'react-reveal/Fade';
import './LoginText.css';


class LoginText extends React.Component {
    render() {
        return (
            <div className="login_text">
                <Fade clear>
                    <h1>Por que se cadastrar?</h1>
                    <p>Ao se cadastrar, você pode participar das votações semanais para decidir as refeições servidas no rancho.</p>
                </Fade>
            </div>
        );
    }
}

export default LoginText;