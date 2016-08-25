/**
 * Created by Mike on 8/24/16.
 */
import React, { Component } from 'react';
import SearchBar from './Search';
import Today from './Today';
import Lists from './Lists';
import HTTP from '../../server/http';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : "yy-mm-dd time location",
            input: "",
            today: {},
            nextDays: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange (e) {
        const today = this.state.today;
        const location = this.state.location;
        const nextDays = this.state.nextDays;
        this.setState({
            input : e.target.value,
            today : today,
            location : location,
            nextDays: nextDays
        });
    }

    submit (e) {
        const API_KEY = 'b4565a77f41ebd6023e7ee73e769cd38';
        const place = this.state.input;
        const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${place},us&mode=json`;
        if (this.state.input === "") {
            alert("Please enter a city");
            return;
        }
        HTTP.get(url)
            .then((data) => {
                console.log(data);
                const date = data.list[0].dt_txt;
                const today = data.list[0];
                const location = data.city.name;
                const nextDays = data.list;
                this.setState({
                    input : "",
                    today : today,
                    location : `${date} ${location}`,
                    nextDays : nextDays
                });
            });
    }

    render () {
        const power = {
            textAlign : 'center',
            background : 'white',
            borderRadius : '0 0 5px 5px',
            fontSize : '10px'
        };
        return (
            <div style={this.props.style}>
                <SearchBar value={this.state.input} onChange={this.handleChange} onClick={this.submit} location={this.state.location}/>
                <Today info={this.state.today} />
                <Lists next={this.state.nextDays} location={this.state.location}/>
                <div style={power}>
                    <p>Forecast by http://openweathermap.org/api</p>
                </div>
            </div>
        );
    }
};

export default Container;