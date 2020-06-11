import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
      onIncrementConter: () => dispatch(actionCreators.increment()),
      onDecrementCouter: () => dispatch(actionCreators.decrement()),
      onAddCounter: () => dispatch(actionCreators.add(5)),
      onSubtractConter: () => dispatch(actionCreators.subtract(5)),
      onStoreResult: (ctr) => dispatch(actionCreators.storeResult(ctr)),
      onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);