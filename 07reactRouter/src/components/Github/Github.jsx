import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/VaradLandge09")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setData(res);
//       });
//   }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-orange-800 rounded-2xl text-2xl text-center text-white p-3 max-w-md my-5 min-w-2xl">
        Github Name: {data.name}
        <img src={data.avatar_url} alt="Github profile img" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/VaradLandge09');
    console.log("Loader");
    return res.json();
}