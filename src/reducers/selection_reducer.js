export default function(state = {}, action){
    switch(action.type){
        case "SELECTION" : 
            state = action.payload
            break;
        default :
            state = []
            break;
    }

    return state;
}