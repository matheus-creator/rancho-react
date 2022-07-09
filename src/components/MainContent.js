import React from "react";
import WeekItem from "./WeekItem";
import Bounce from "react-reveal/Bounce";
import "./MainContent.css";
import urls from "../url.json";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOpen: null,
            weekDay: [],
            monthDay: [],
            breakfastMain: [],
            breakfast1: [],
            breakfast2: [],
            breakfast3: [],
            breakfast4: [],
            breakfast5: [],
            lunchMain: [],
            lunch1: [],
            lunch2: [],
            lunch3: [],
            lunch4: [],
            lunch5: [],
            dinnerMain: [],
            dinner1: [],
            dinner2: [],
            dinner3: [],
            dinner4: [],
            dinner5: [],
            url: [],
        };
    }

    switchDropdown = (index) => {
        this.setState({ dropOpen: index });
    };

    fetchData = async () => {
        try {
            const response = await fetch(
                "https://ranchopontocom.herokuapp.com/api/menus"
            );
            const json = await response.json();

            let weekDayAux = [];
            let monthDayAux = [];

            let breakfastMainAux = [];
            let breakfast1Aux = [];
            let breakfast2Aux = [];
            let breakfast3Aux = [];
            let breakfast4Aux = [];
            let breakfast5Aux = [];

            let lunchMainAux = [];
            let lunch1Aux = [];
            let lunch2Aux = [];
            let lunch3Aux = [];
            let lunch4Aux = [];
            let lunch5Aux = [];

            let dinnerMainAux = [];
            let dinner1Aux = [];
            let dinner2Aux = [];
            let dinner3Aux = [];
            let dinner4Aux = [];
            let dinner5Aux = [];
            let urlAux = [];

            for (const element of json) {
                weekDayAux = weekDayAux.concat(element.week_day);
                monthDayAux = monthDayAux.concat(element.month_day);

                breakfastMainAux = breakfastMainAux.concat(
                    element.breakfast_main
                );
                breakfast1Aux = breakfast1Aux.concat(element.breakfast_1);
                breakfast2Aux = breakfast2Aux.concat(element.breakfast_2);
                breakfast3Aux = breakfast3Aux.concat(element.breakfast_3);
                breakfast4Aux = breakfast4Aux.concat(element.breakfast_4);
                breakfast5Aux = breakfast5Aux.concat(element.breakfast_5);

                lunchMainAux = lunchMainAux.concat(element.lunch_main);
                lunch1Aux = lunch1Aux.concat(element.lunch_1);
                lunch2Aux = lunch2Aux.concat(element.lunch_2);
                lunch3Aux = lunch3Aux.concat(element.lunch_3);
                lunch4Aux = lunch4Aux.concat(element.lunch_4);
                lunch5Aux = lunch5Aux.concat(element.lunch_5);

                dinnerMainAux = dinnerMainAux.concat(element.dinner_main);
                dinner1Aux = dinner1Aux.concat(element.dinner_1);
                dinner2Aux = dinner2Aux.concat(element.dinner_2);
                dinner3Aux = dinner3Aux.concat(element.dinner_3);
                dinner4Aux = dinner4Aux.concat(element.dinner_4);
                dinner5Aux = dinner5Aux.concat(element.dinner_5);

                urlAux = urlAux.concat(urls[element.lunch_main]);
            }

            this.setState({
                weekDay: weekDayAux,
                monthDay: monthDayAux,

                breakfastMain: breakfastMainAux,
                breakfast1: breakfast1Aux,
                breakfast2: breakfast2Aux,
                breakfast3: breakfast3Aux,
                breakfast4: breakfast4Aux,
                breakfast5: breakfast5Aux,

                lunchMain: lunchMainAux,
                lunch1: lunch1Aux,
                lunch2: lunch2Aux,
                lunch3: lunch3Aux,
                lunch4: lunch4Aux,
                lunch5: lunch5Aux,

                dinnerMain: dinnerMainAux,
                dinner1: dinner1Aux,
                dinner2: dinner2Aux,
                dinner3: dinner3Aux,
                dinner4: dinner4Aux,
                dinner5: dinner5Aux,

                url: urlAux,
            });
        } catch (e) {
            console.log(e);
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className="main_content">
                <Bounce left>
                    <WeekItem
                        weekDay={this.state.weekDay[0]}
                        monthDay={this.state.monthDay[0]}
                        breakfast={[
                            this.state.breakfastMain[0],
                            this.state.breakfast1[0],
                            this.state.breakfast2[0],
                            this.state.breakfast3[0],
                            this.state.breakfast4[0],
                            this.state.breakfast5[0],
                        ]}
                        lunch={[
                            this.state.lunchMain[0],
                            this.state.lunch1[0],
                            this.state.lunch2[0],
                            this.state.lunch3[0],
                            this.state.lunch4[0],
                            this.state.lunch5[0],
                        ]}
                        dinner={[
                            this.state.dinnerMain[0],
                            this.state.dinner1[0],
                            this.state.dinner2[0],
                            this.state.dinner3[0],
                            this.state.dinner4[0],
                            this.state.dinner5[0],
                        ]}
                        url={this.state.url[0]}
                    />
                    <WeekItem
                        weekDay={this.state.weekDay[1]}
                        monthDay={this.state.monthDay[1]}
                        breakfast={[
                            this.state.breakfastMain[1],
                            this.state.breakfast1[1],
                            this.state.breakfast2[1],
                            this.state.breakfast3[1],
                            this.state.breakfast4[1],
                            this.state.breakfast5[1],
                        ]}
                        lunch={[
                            this.state.lunchMain[1],
                            this.state.lunch1[1],
                            this.state.lunch2[1],
                            this.state.lunch3[1],
                            this.state.lunch4[1],
                            this.state.lunch5[1],
                        ]}
                        dinner={[
                            this.state.dinnerMain[1],
                            this.state.dinner1[1],
                            this.state.dinner2[1],
                            this.state.dinner3[1],
                            this.state.dinner4[1],
                            this.state.dinner5[1],
                        ]}
                        url={this.state.url[1]}
                    />
                    <WeekItem
                        weekDay={this.state.weekDay[2]}
                        monthDay={this.state.monthDay[2]}
                        breakfast={[
                            this.state.breakfastMain[2],
                            this.state.breakfast1[2],
                            this.state.breakfast2[2],
                            this.state.breakfast3[2],
                            this.state.breakfast4[2],
                            this.state.breakfast5[2],
                        ]}
                        lunch={[
                            this.state.lunchMain[2],
                            this.state.lunch1[2],
                            this.state.lunch2[2],
                            this.state.lunch3[2],
                            this.state.lunch4[2],
                            this.state.lunch5[2],
                        ]}
                        dinner={[
                            this.state.dinnerMain[2],
                            this.state.dinner1[2],
                            this.state.dinner2[2],
                            this.state.dinner3[2],
                            this.state.dinner4[2],
                            this.state.dinner5[2],
                        ]}
                        url={this.state.url[2]}
                    />
                    <WeekItem
                        weekDay={this.state.weekDay[3]}
                        monthDay={this.state.monthDay[3]}
                        breakfast={[
                            this.state.breakfastMain[3],
                            this.state.breakfast1[3],
                            this.state.breakfast2[3],
                            this.state.breakfast3[3],
                            this.state.breakfast4[3],
                            this.state.breakfast5[3],
                        ]}
                        lunch={[
                            this.state.lunchMain[3],
                            this.state.lunch1[3],
                            this.state.lunch2[3],
                            this.state.lunch3[3],
                            this.state.lunch4[3],
                            this.state.lunch5[3],
                        ]}
                        dinner={[
                            this.state.dinnerMain[3],
                            this.state.dinner1[3],
                            this.state.dinner2[3],
                            this.state.dinner3[3],
                            this.state.dinner4[3],
                            this.state.dinner5[3],
                        ]}
                        url={this.state.url[3]}
                    />
                    <WeekItem
                        weekDay={this.state.weekDay[4]}
                        monthDay={this.state.monthDay[4]}
                        breakfast={[
                            this.state.breakfastMain[4],
                            this.state.breakfast1[4],
                            this.state.breakfast2[4],
                            this.state.breakfast3[4],
                            this.state.breakfast4[4],
                            this.state.breakfast5[4],
                        ]}
                        lunch={[
                            this.state.lunchMain[4],
                            this.state.lunch1[4],
                            this.state.lunch2[4],
                            this.state.lunch3[4],
                            this.state.lunch4[4],
                            this.state.lunch5[4],
                        ]}
                        dinner={[
                            this.state.dinnerMain[4],
                            this.state.dinner1[4],
                            this.state.dinner2[4],
                            this.state.dinner3[4],
                            this.state.dinner4[4],
                            this.state.dinner5[4],
                        ]}
                        url={this.state.url[4]}
                    />
                    <WeekItem
                        weekDay={this.state.weekDay[5]}
                        monthDay={this.state.monthDay[5]}
                        breakfast={[
                            this.state.breakfastMain[5],
                            this.state.breakfast1[5],
                            this.state.breakfast2[5],
                            this.state.breakfast3[5],
                            this.state.breakfast4[5],
                            this.state.breakfast5[5],
                        ]}
                        lunch={[
                            this.state.lunchMain[5],
                            this.state.lunch1[5],
                            this.state.lunch2[5],
                            this.state.lunch3[5],
                            this.state.lunch4[5],
                            this.state.lunch5[5],
                        ]}
                        dinner={[
                            this.state.dinnerMain[5],
                            this.state.dinner1[5],
                            this.state.dinner2[5],
                            this.state.dinner3[5],
                            this.state.dinner4[5],
                            this.state.dinner5[5],
                        ]}
                        url={this.state.url[5]}
                    />
                    <WeekItem
                        weekDay={this.state.weekDay[6]}
                        monthDay={this.state.monthDay[6]}
                        breakfast={[
                            this.state.breakfastMain[6],
                            this.state.breakfast1[6],
                            this.state.breakfast2[6],
                            this.state.breakfast3[6],
                            this.state.breakfast4[6],
                            this.state.breakfast5[6],
                        ]}
                        lunch={[
                            this.state.lunchMain[6],
                            this.state.lunch1[6],
                            this.state.lunch2[6],
                            this.state.lunch3[6],
                            this.state.lunch4[6],
                            this.state.lunch5[6],
                        ]}
                        dinner={[
                            this.state.dinnerMain[6],
                            this.state.dinner1[6],
                            this.state.dinner2[6],
                            this.state.dinner3[6],
                            this.state.dinner4[6],
                            this.state.dinner5[6],
                        ]}
                        url={this.state.url[6]}
                    />
                </Bounce>
            </div>
        );
    }
}

export default MainContent;
