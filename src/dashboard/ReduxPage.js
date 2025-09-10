import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increasebyamount, increment } from "./redux/CounterSlice";

function ReduxPage() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [number, setnumber] = useState(0);

    const increasevalue = () => {
        dispatch(increment());
    };

    return (
        <Fragment>
            
            <h1>count is - {count}</h1>
            <button onClick={increasevalue}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <input type="number" placeholder="enter a value" onInput={(event)=>setnumber(Number(event.target.value))} />
            <button onClick={()=>dispatch(increasebyamount(number))}>increase by amount</button>
            <h1>{number}</h1>

        </Fragment>
    )
};
export default ReduxPage;