export default function(state = {}, action){
    switch(action.type){
        case "SINGLE_USER" : 
            state = action.payload
            break;
        default :
            state = {
                "name" : "",
                "fathername" : "",
                "lastname" : ""
            }
            break;
    }

    return state;
}