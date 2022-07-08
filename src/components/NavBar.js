import React from 'react';
import { Link } from "react-router-dom";
import NavItem from './NavItem';
import './NavBar.css';
import { connect } from 'react-redux';
import { setUser } from '../actions';

class NavBar extends React.Component {
    logout = () => {
        this.props.setUser(null);
    }

    chooseMenuOptions = () => {
        if (this.props.currentUser == null) {
            return (
                <React.Fragment>
                    <Link to='/login'>
                        <NavItem itemName="Entrar"/>
                    </Link>
                    <Link to='/signup'>
                        <NavItem itemName="Cadastrar"/>
                    </Link>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <div onClick={this.logout}>
                    <NavItem itemName="Sair"/>
                </div>
            </React.Fragment>
        );        
    }    

    render() {
        return (
            <div className="nav_bar">
                <div className="additional_element"></div>
                <div className="menu_section">
                    <Link to='/'>
                        <NavItem itemName="Cardápio Semanal"/>
                    </Link>

                    <Link to='/vote'>
                        <NavItem itemName="Votação Semanal"/>
                    </Link>

                    <Link to='/feedbacks'>
                        <NavItem itemName="Feedback"/>
                    </Link>
                </div>
                <div className="login_section">
                    {this.chooseMenuOptions()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser};
};

export default connect(mapStateToProps, { setUser })(NavBar);