/**
 * Created by Mike on 8/24/16.
 */
import React from 'react';

const SearchBar = (props)=> {
    const font_style = {
        color : 'white'
    };
    const wrapple = {
        padding : '10px'
    };

    const transparent = {
        background : 'transparent',
        color : 'white',
        border: 'none',
        outline: 'none'
    };
    return (
        <div style={wrapple}>
            <div className="input-group" >
                <input style={transparent} type="text" className="form-control" placeholder="Ex: san jose" value={props.value} onChange={props.onChange}/>
                <div className="input-group-btn">
                    <button className="btn" style={transparent} onClick={props.onClick}><span className="glyphicon glyphicon-search"></span></button>
                </div>
            </div>
            <p style={font_style}>{props.location}</p>
        </div>
    );
};

export default SearchBar;
