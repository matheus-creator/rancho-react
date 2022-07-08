import React, { useState } from 'react';
import axios from 'axios';
import './SignBox.css';
import bcryptjs from 'bcryptjs';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setUser } from '../actions';

const SignBox = (props) => {
    const [state, setMyState] = useState({name: '', email: '', password: '', text: ''});
    const navigate = useNavigate();

    const isPresent = (email, json) => {
        for(let i = 0; i < json.length; i++){
            if(email === json[i].email)
                return i;
        }

        return false;
    }

    const postData = async () => {
       bcryptjs.hash(state.password, 10, (err, hash) => {
            if(err) throw Error("Could not hash password.") 

            axios.post('http://127.0.0.1:8000/api/users/', {id: 'a', name: state.name, email: state.email, password: hash});
        });
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();
        setMyState({ text: ''});

        const response = await fetch('http://127.0.0.1:8000/api/users');
        const json = await response.json();

        if(isPresent(state.email, json)){
            setMyState({ text: 'User already registered'});
            return;
        }

        postData();
        props.setUser(state.email);
        setMyState({ text: 'You have been registered!'});
        navigate('/');
    }

    
    return(
        <div className='sign_box'>
            <h1>{props.mainText}</h1>
            <form onSubmit={onFormSubmit}>
                <div className='forms'>
                    <input
                        id='name'
                        type='text'
                        placeholder='Nome'
                        value={state.name || ''}
                        onChange={e => setMyState({ name: e.target.value, email: state.email, password: state.password, text: '' })}
                    />

                    <input
                        id='email'
                        type='text'
                        placeholder='Email'
                        value={state.email || ''}
                        onChange={e => setMyState({ name: state.name, email: e.target.value, password: state.password, text: '' })}
                    />

                    <input
                        id='password'
                        type='password'
                        placeholder='Senha'
                        onChange={e => setMyState({ name: state.name, email: state.email, password: e.target.value, text: '' })}
                    />
                    <button type='submit'>
                        {props.mainText}
                    </button>
                </div>
            </form>
            <p>{state.text}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser};
};

export default connect(mapStateToProps, { setUser })(SignBox);