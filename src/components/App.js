import React from 'react';
import MenuPage from './MenuPage';
import Login from './Login';
import SignUp from './SignUp';
import Votes from './Votes';
import Feedback from './Feedback';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="app">                    
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<MenuPage />}/>
                        <Route path='/login' exact element={<Login />}/>
                        <Route path='/signup' exact element={<SignUp />}/>
                        <Route path='/vote' exact element={<Votes />}/>
                        <Route path='/feedbacks' exact element={<Feedback />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
