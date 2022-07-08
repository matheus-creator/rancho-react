import React, { useState } from 'react';
import './LoginBox.css';
import bcryptjs from 'bcryptjs';
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setUser } from '../actions';

const LoginBox = (props) => {
    const [state, setMyState] = useState({email: '', password: '', boxShadow: 'none', valid: true});
    const navigate = useNavigate();

    const isPresent = (email, json) => {
        for (let i = 0; i < json.length; i++) {
            if(email === json[i].email)
                return i;
        }
    
        return false;
    }
    
    const validate = async (email, password, json) => {
        let jsonIndex = isPresent(email, json);
    
        if(jsonIndex){
            const response = await bcryptjs.compare(password, json[jsonIndex].password);
            return response;
        }
        
        return false;
    }
    
    const fetchData = async () => {
        setMyState({email: '', password: '', boxShadow: 'none', valid: true});
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users');
            const json = await response.json();
            
            const validCredentials = await validate(state.email, state.password, json);
    
            if (validCredentials) {
                props.setUser(state.email);
                setMyState({ text: 'Entrando...' });
                navigate('/');
            }
            else {
                setMyState({email: '', password: '', boxShadow: '0 0 0 1px red', valid: false});
            }
        }
        catch(e) {
            console.log(e);
        }
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        fetchData();
    }

    return(
        <div className='login_box'>
            <h1>{props.mainText}</h1>
            <form onSubmit={onFormSubmit}>
                <div className='forms'>
                    <input
                        id='email'
                        type='text'
                        placeholder='Email'
                        value={state.email || ''}
                        onChange={e => setMyState({ email: e.target.value, password: '', boxShadow: 'none', valid: true})}
                        style={{boxShadow: state.boxShadow}}
                    />
                    
                    <div>
                        <Fade bottom collapse when={!state.valid}>
                            <div className="error">
                                Credenciais inválidas
                            </div>
                        </Fade>
                    </div>                    

                    <input
                        id='password'
                        type='password'
                        placeholder='Senha'
                        onChange={e => setMyState({ email: state.email, password: e.target.value, boxShadow: 'none', valid: true })}
                        style={{boxShadow: state.boxShadow}}
                    />
                    <div>
                        <Fade bottom collapse when={!state.valid}>
                            <div className="error">
                                Credenciais inválidas
                            </div>
                        </Fade>
                    </div>

                    <button type='submit'>
                        {props.mainText}
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser};
};

export default connect(mapStateToProps, { setUser })(LoginBox);