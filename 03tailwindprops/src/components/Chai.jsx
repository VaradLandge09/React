import React from "react";

function Chai({username, age}) {
    return <>
    <div className="mb-1.5">
        <h1 className="bg-amber-500 p-2 rounded-xl mb-0.5" >UserName is: {username}</h1>
        <h2 className="bg-blue-500 p-2 rounded-xl" >Age is: {age}</h2>
    </div>
    </>
}

export default Chai;