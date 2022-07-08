import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import './WeekItem.css'

class WeekItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    setActive = () => {
        this.setState({ active: !this.state.active });
    }

    renderMealInfo = (meal) => {
        if (meal === 'breakfast') {
            return this.props.breakfast.map(item => {
                return item === '-------' ? undefined : <div className="text">{item}</div>
            });
        }
        else if (meal === 'lunch') {
            return this.props.lunch.map(item => {
                return item === '-------' ? undefined : <div className="text">{item}</div>
            })
        }
        else {
            return this.props.dinner.map(item => {
                return item === '-------' ? undefined : <div className="text">{item}</div>
            })
        }
    }

    render() {

        const Item = styled.div`
        /* background-color is value of props.color */
        background-color: white;
        cursor: pointer;
        color: white;
        font-size: 1.5em;
        padding: 10px;
        box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
        width: 100 vw;
        max-width: 100 vw;
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url(${props => props.url}) center;
        background-size: cover;
        margin-top: 2px;

        &:hover{
            transition-duration: 0.2s;
            filter: brightness(80%);
        }
        `;
    
        return (
            <React.Fragment>
                <Item url={this.props.url} onClick={this.setActive}>
                    <div className="week_day">
                        {this.props.weekDay}
                    </div>
                    <div className="month_day">
                        {this.props.monthDay}
                    </div>
                </Item>
                <Fade clear collapse when={this.state.active}>
                    <div className="wrapper" id="dropdown">
                        <div className="row-drop">
                            <div className="column-drop">
                                <div className="title"> Café da manhã </div>
                                {this.renderMealInfo('breakfast')}
                            </div>
                            <div className="column-drop">
                                <div className="title"> Almoço </div>
                                {this.renderMealInfo('lunch')}
                            </div>
                            <div className="column-drop">
                                <div className="title"> Jantar </div>
                                {this.renderMealInfo('dinner')}
                            </div>
                        </div>
                    </div>
                </Fade>            
            </React.Fragment>
        );
    }
}

export default WeekItem;