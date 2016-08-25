/**
 * Created by Mike on 8/25/16.
 */
import React from 'react';
import EachDay from './EachDay';

const Lists = (props) => {
    const nexts = props.next;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let count = 0;
    let color = '#EBEBEB';
    const nextDays = nexts.map((obj,i) => {
        min = Math.min(min, obj.main.temp_min);
        max = Math.max(max, obj.main.temp_max);
        if ( i % 8 === 0 && count < 5) {
            color = count % 2 == 0 ? '#EBEBEB' : '#F5F5F5';
            let newObj = {
                min : parseInt(min - 273.15),
                max : parseInt(max - 273.15),
                icon : obj.weather[0].icon
            };
            count ++;
            min = Number.MAX_VALUE;
            max = Number.MIN_VALUE;
            return  <EachDay key={i + props.location} info={newObj} location={obj.dt_txt} background={color}/>;
        }
    });
    return (
        <ul className="list-group" style={{marginBottom: '0'}}>
            {nextDays}
        </ul>
    );
};

export default Lists;
