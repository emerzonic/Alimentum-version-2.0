import {SET_CURRENT_USER} from "../actions/types";

const initialState = {
    user:{},
    validToken:false
}

const isActionPayload = (payload)=>{
    if(payload){
        return true;
    }else{
        return false;
    }
}

export default function(state=initialState, action){
    switch (action.type) {
        case SET_CURRENT_USER:
        return {
            ...state,
            user:action.payload,
            validToken:isActionPayload(action.payload)
        }   

        default:
            return state;
    }

}