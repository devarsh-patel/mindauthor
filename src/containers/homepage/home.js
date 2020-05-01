import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './home.css';
import selectionAction from '../../actions/selection_action';
import singleuserAction from '../../actions/singleuser_action';
import UserType from '../../components/usertype/usertype';
import AllUser from '../../components/alluser/alluser';
import SingleUser from '../../components/singleuser/singleuser';

const Home = (props) => {

    const [singleuser, setSingleUser] = useState({
        "id" : 1,
        "name" : "",
        "fathername" : "",
        "lastname" : ""
    });
    const [type, setType] = useState("");
    // console.log(this.state.type);
    return (
        <div className="Home">
            <nav className="navbar navbar-expand-md ng-light bg-info text-white">
                <div className="navbar-brand">Authors</div>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <UserType setType={setType}/>
                    </div>
                    <div className="col-md-4">
                        <AllUser setSingleUser={setSingleUser} type={type}/>
                    </div>
                    <div className="col-md-6">
                        <SingleUser su={singleuser}/>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
