import React from "react";

export default function Icon({material, crypto, className, ...props}) {
    return (
        <>
        {
            material ?
            <span {...props} className={"material-icons " + className}>{material}</span>
            :
            <i {...props} className={"cfu-" + crypto}/>
        }
        </>
    )
}