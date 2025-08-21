import React, { Fragment, useState } from "react";
import ChildComp from "./ChildComp";

function HomePage() {

    const [count, setCount] = useState(0);

    const [name, setName] = useState();

    return (
        <Fragment>

            <div>
                <h2>the count is : {count}</h2>
                <button className="mybtn" onClick={() => setCount(count + 1)}>increment</button>
                <h1>the username is : {name}</h1>
                <input type="text" placeholder="enter name" onInput={(event)=>setName(event.target.value)} />
            </div>


        </Fragment>
    )
}

export default HomePage;