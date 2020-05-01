import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import './usertype.css';
import selectionAction from '../../actions/selection_action';
import singleuserAction from '../../actions/singleuser_action';
import { AXIOS_URL } from '../../constants';
import Axios from 'axios';

const UserType = (props) => {

    const authorSelected = () => {
        Axios.get(`${AXIOS_URL}/authors`)
        .then( result => {
            props.selectionAction(result.data)
        })
        .catch( err => console.log(err));

        props.setType("authors")
    }

    const userSelected = () => {
        Axios.get(`${AXIOS_URL}/users`)
        .then( result => {
            props.selectionAction(result.data)
        })
        .catch( err => console.log(err));
        props.setType("users")
    }

    return (
        <div className="UserType pt-2 pl-1 pr-1 mb-3">
            <button className="btn btn-primary btn-lg btn-block" onClick={()=> authorSelected()}>Authors</button>
            <button className="btn btn-warning btn-lg btn-block" onClick={()=> userSelected()}>Users</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selection : state.selectionReducer,
    singleuser : state.singleuserReducer
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectionAction,
        singleuserAction
    },dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserType)
