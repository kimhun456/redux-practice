import * as types from "../actions/ActionTypes";

const initialState = {
    number : 0,
    dummy : "dumb",
    dumbObject : {
        d : 0,
        u : 1,
        m : 2,
        b : 3,
    }
};


export default function counter(prevState = initialState, action){
    
    // if( typeof prevState === "undefined"){
    //     return initialState;
    // }
    /** */

    switch (action.type){

        case types.INCREMENT: 
            return { ...prevState, 
                number : prevState.number + 1 ,
                dumbObject : {
                    ...prevState.dumbObject,
                    m : 1
                }
            };

        case types.DECREMENT:
            return {
                ...prevState,
                number : prevState.number - 1
            };

        default : 
            return prevState;
    }

}