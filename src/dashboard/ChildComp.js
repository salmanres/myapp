import React, { Fragment } from "react";

function ChildComp(prop){
    console.log(prop);
    return(
        <Fragment>
            <h1>my name is {prop.name}</h1>
        </Fragment>
    )
};

export default ChildComp;