/**
 * Created by Mike on 8/25/16.
 */
import React from 'react';

const EachDay = (props) => {
    //let empty = Object.keys(info).length === 0 && info.constructor === Object;
    const date = props.location.split(' ')[0].split('-').splice(1, 2).join('/');
    const icon_url = `http://openweathermap.org/img/w/${props.info.icon}.png`;
    const col_style = {
        height : '50px',
        textAlign : 'center'
    };

    const text_style = {
        paddingTop : '15px'
    };

    const list_style = {
        padding : '0px',
        margin : '0',
        borderRadius : '0px',
        background : props.background
    };
    return (
        <li className="list-group-item row" style={list_style}>
            <div className="col-sm-4 col-xs-4" style={col_style}>
                <p style={text_style}>{date}</p>
            </div>
            <div className="col-sm-4 col-xs-4" style={col_style}>
                <img src={icon_url}/>
            </div>
            <div className="col-sm-4 col-xs-4" style={col_style}>
                <p style={text_style}>{props.info.min}°/{props.info.max}°</p>
            </div>
        </li>
    );
};

export default EachDay;
