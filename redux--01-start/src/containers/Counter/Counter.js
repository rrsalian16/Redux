import React, { Component } from 'react';
import { connect } from 'react-redux';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementConter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCouter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractConter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map((strResult,index)=>{
                       return <li key={index} onClick={()=>this.props.onDeleteResult(index)}>{strResult}</li>;
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        ctr:state.ctr.counter,
        storedResult:state.res.result
    };
};

const mapDispatchToProps=dispatch=>{
    return {
      onIncrementConter: () => dispatch({ type: actionTypes.INCREMENT }),
      onDecrementCouter: () => dispatch({ type: actionTypes.DECREMENT }),
      onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
      onSubtractConter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
      onStoreResult: (ctr) => dispatch({ type: actionTypes.STORE_RESULT,counter:ctr }),
      onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resId: id }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);