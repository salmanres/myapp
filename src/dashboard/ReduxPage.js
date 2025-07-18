import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/CounterSlice';

function ReduxPage() {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    const decrementfunctio = () => {
        dispatch(decrement());
    };
  return (
    <Fragment>
        <h1>redux page</h1>
        <h1>counter is : {count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={decrementfunctio}> decrement</button>
    </Fragment>
  )
}

export default ReduxPage