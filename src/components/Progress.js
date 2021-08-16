import React from "react";
function Progress({obj}){
    return(
        <>
        <div className="card-body">
            <h4 className="small font-weight-bold">{obj.name} <span className="float-right">{obj.value}%</span></h4>
            <div className="progress mb-4">
                <div className={`progress-bar ${obj.color}`} role="progressbar" style={{width: `${obj.value}%`}} aria-valuenow={`${obj.value}`} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
        </div>
        </>

    );
}

export default Progress;