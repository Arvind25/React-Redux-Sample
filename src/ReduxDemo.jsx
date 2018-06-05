import React, {Component} from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component{
    render (){

        //step 2 reducer: state and action
        const reducer = function (state, action){
            switch(action.type){
                case "FIRST":
                    return action.payload;
                break;
                case "SECOND":
                    return action.payload;
                break;
                case "THIRD":
                    return action.payload;
                break;
                default:
                    return state;
            }
        }
        //step 1 Store: reducer n state
        const store = createStore(reducer, 'PEACE')
        

        //step 3 subsribe
        store.subscribe( () => {
            console.log("",store.getState());
        });
        
        //step 4 Dispatch
        store.dispatch({type:"FIRST", payload:"FIRST CALL"});
        store.dispatch({type:"SECOND", payload:"SECOND CALL"});
        store.dispatch({type:"THIRD", payload:"THIRD CALL"})
        return(
            <div> test </div>
        )
    }
}
export default ReduxDemo;