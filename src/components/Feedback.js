import React from 'react';
import axios from 'axios';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import Footer from './Footer';
//import Button from './Button';
import Fade from 'react-reveal/Fade';
import './Feedback.css';

class Feedback extends React.Component {
    state = {text: ''};

    onFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({ text: ''});

        axios.post('http://127.0.0.1:8000/api/feedbacks/', {message: this.state.text});
    }

    render() {
        return (
            <div className="feedback">
                <div className="top_div">
                    <HeadBar/>
                    <NavBar/>
                </div>
                <Fade clear>
                    <div className="feedback_container">
                        <div className="feedback_background">
                            <form className="feedback_form">
                                <textarea
                                    id='comment'
                                    type='text'
                                    placeholder='Digite aqui seu comentário'
                                    value={this.state.text}
                                    onChange={e => this.setState({ text: e.target.value })}
                                />
                            </form>
                        </div>
                        <button id="small" type='submit' onClick={this.onFormSubmit}>Enviar</button>        
                    </div>
                </Fade>
                <Footer/>
            </div>
        );
    }
}

export default Feedback;