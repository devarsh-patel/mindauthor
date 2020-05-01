import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import './alluser.css';
import selectionAction from '../../actions/selection_action';
import singleuserAction from '../../actions/singleuser_action';
import Axios from 'axios';
import { AXIOS_URL } from '../../constants';
import Pagination from '../pagination/pagination';
import Swal from 'sweetalert2';

const AllUser = (props) => {

    // const [ totalposts, setTotalPosts ] = useState(props.selection.length);
    const [ currentpage, setCurrentPage ] = useState(1);
    const [ postperpage, setPostPerPage ] = useState(3);
    const [ name, setName ] = useState("");
    const [ fathername, setFathername ] = useState("");
    const [ lastname, setLastname ] = useState("");

    const addNewUser = () => {
        if(props.type === ""){
            Swal.fire({
                title: 'Select a user !!!',
                icon: 'error',
                showCancelButton : false,
                showCloseButton : false,
                showConfirmButton : false
            })
        }
        else {
            Axios.post(`${AXIOS_URL}/${props.type}/add`,{
                "name" : name,
                "fathername" : fathername,
                "lastname" : lastname
            })
            .then( result => {
                Swal.fire({
                    title: 'User Added Successfully !',
                    icon: 'success',
                    showCancelButton : false,
                    showCloseButton : false,
                    showConfirmButton : false
                })
                console.log(result.data);
                props.selectionAction([...props.selection, result.data]);
            })
            .catch( err => console.log(err))
        }
    }

    let posts = props.selection;
    let lastindex = currentpage * postperpage;
    let firstindex = lastindex - postperpage;
    let currentposts = posts.slice(firstindex, lastindex)

    const getSelectedUsers = (data) => (
        data.map((item,key) => (
            <div key={key} className="d-flex bg-light mt-1 mb-1 p-2 justify-content-between align-items-center">
                <img className="img-fluid" src="/images/avatar.jpg" alt="avatar" style={{width: "65px"}}/>
                <div>{item.name}</div>
                <div className="d-flex">
                    <button className="btn btn-info mr-1" onClick={()=> {props.setSingleUser(item)}}>Show</button>
                    <button className="btn btn-danger" onClick={()=> {removeUser(item._id)}}>Delete</button>
                </div>
            </div>
        ))
    )

    const removeUser = (key) => {
        Axios.delete(`${AXIOS_URL}/${props.type}/delete/${key}`)
        .then( result => {
            props.selectionAction(result.data)
        })
        .catch( err => console.log(err))
    }

    return (
        <div className="AllUser pt-2 mb-3">
            {getSelectedUsers(currentposts)}
            <div className="d-flex justify-content-between">
                <div>
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Add New</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="text" className="form-control mb-2" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>                                    
                                    <input type="text" className="form-control mb-2" placeholder="Fathername" onChange={(e)=>setFathername(e.target.value)}/>
                                    <input type="text" className="form-control mb-2" placeholder="Lastname" onChange={(e)=>setLastname(e.target.value)}/> 
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=> addNewUser()}>Add Users</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    <Pagination
                        totalposts={props.selection.length}
                        currentpage={currentpage}
                        postperpage={postperpage}    
                        setCurrentPost={setCurrentPage}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(AllUser)
