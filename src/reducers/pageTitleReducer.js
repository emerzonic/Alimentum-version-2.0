import {GET_PAGE_TITLE} from "../actions/types";

const initialState = ""

export default function(state=initialState, action){
    switch (action.type) {
        case GET_PAGE_TITLE:
        return action.payload;    
        default:
            return state;
    }

}