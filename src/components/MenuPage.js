import React from 'react';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import MainContent from './MainContent';
import './App.css';
import Footer from './Footer';

class MenuPage extends React.Component {
    render() {
        return (
            <div className="main_page">                    
                <HeadBar />
                <NavBar /> 
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}

export default MenuPage;

