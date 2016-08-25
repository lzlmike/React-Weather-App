/**
 * Created by Mike on 8/23/16.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';

const App = () => {
    return (
        <div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#EC4444', borderRadius : '5px'}}/>
            </div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#79B8AF', borderRadius : '5px'}}/>
            </div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#E68E4F', borderRadius : '5px'}}/>
            </div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#A6A539', borderRadius : '5px'}}/>
            </div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#F27E7F', borderRadius : '5px'}}/>
            </div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#817871', borderRadius : '5px'}}/>
            </div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#367DB5', borderRadius : '5px'}}/>
            </div>
            <div className="col-sm-3 col-xs-3" style={{margin : '20px 0'}}>
                <Container style={{background: '#9770A7', borderRadius : '5px'}}/>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));