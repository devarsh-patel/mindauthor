import React from 'react'

import './pagination.css';

const Pagination = ({ totalposts, currentpage, postperpage, setCurrentPost}) => {

    let count = Math.ceil(totalposts / postperpage);
    let arr = []
    let innerarr = []
    for(let i =1;i<=count;i++){
        arr.push(i);
    }

    if(arr.length > 2 ){
        if(currentpage === 1){
            innerarr.push(2)
        }
        else if (currentpage === arr[arr.length - 1]){
            innerarr.push(arr[arr.length-2])
        }
        else {
            if(currentpage-1 > 1){
                innerarr.push(currentpage-1)
            }        
            innerarr.push(currentpage);
            if(currentpage+1 < arr[arr.length-1]){
                innerarr.push(currentpage + 1)
            }
        }
    }


    

    return (
        <div className="d-flex">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-link"
                        style={count === 0 ? {display:"none"} : {}}
                        onClick={()=>{
                            if(currentpage - 1 > 0){
                                setCurrentPost( currentpage - 1)
                            }
                        }}>Previous</li>
                    <li className="page-link"
                        onClick={()=>{
                            setCurrentPost(arr[0])
                        }}>{arr[0]}</li>
                    
                    <li className="page-link"
                        style={innerarr[0] > 2 ? {} : {display : "none"}}>
                        ...</li>
                    {innerarr.map((item,key) => (
                        <li key={key} className="page-link"
                            onClick={()=>{
                                setCurrentPost(item)
                            }}>{item}</li>
                    ))}
                    <li className="page-link"
                        style={innerarr[innerarr.length-1] < count-1  ? {} : {display : "none"}}>
                        ...</li>
                    <li className="page-link"
                        style={ arr[arr.length-1] !== arr[0] ? {} : { display : "none"}}
                        onClick={()=>{
                            setCurrentPost(arr[arr.length - 1])
                        }}>{arr[arr.length - 1]}</li>
                    <li className="page-link"
                        style={currentpage === count || count === 0 ? {display:"none"} : {}}
                        onClick={()=>{
                            if(currentpage + 1 <= count){
                                setCurrentPost( currentpage + 1)
                            }
                        }}>Next</li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
