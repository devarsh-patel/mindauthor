import React from 'react'
import { connect } from 'react-redux'

import './app.css';
import Home from '../containers/homepage/home';

const App = (props) => {
    return (
        <div className="App">
            <Home/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selection : state.selectionReducer,
    singleuser : state.singleuserReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
