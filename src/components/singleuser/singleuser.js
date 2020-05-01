import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './singleuser.css';
import selectionAction from '../../actions/selection_action';
import singleuserAction from '../../actions/singleuser_action';

const SingleUser = (props) => {
        // console.log(this.props.singleuser)
    return (
        <div className="SingleUser d-flex bg-light p-2 align-items-center mb-3">
            <img className="img-fluid mr-3" src="/images/avatar.jpg" alt="avatar" style={{width : "100px"}}/>
            <div className="d-flex">
                <div className="d-flex flex-column justify-content-between">
                    <h6>Name: <small>{props.su.name}</small></h6>
                    <h6>Father Name: <small>{props.su.fathername}</small></h6>
                    <h6>Lastname: <small>{props.su.lastname}</small></h6>
                </div> 
            </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
