import React from 'react';
import {connect} from 'react-redux';
import App from '../component/app';

function mapStateToProps(state) {
    return {name: state.name};
}

function mapDispatchToProps(dispatch) {
    return {
        handleButton1: () => {
            dispatch({type: "CHANGE_NAME1"})
        },
        handleButton2: () => {
            dispatch({type:"CHANGE_NAME2"})
        },
        handleButton3:() => {
            dispatch({type:"CHANGE_NAME3"})
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);