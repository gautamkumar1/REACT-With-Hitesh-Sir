/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
// const API = "https://api.github.com/users/gautamkumar1";
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch(API).then((response) => response.json()).then((data)=>setData(data))
    // },[])
  return (
    <div className="text-center m-4 p-2 bg-gray-700 text-white">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github

export const githubInfoLoder = async () => {
    const response = await fetch('https://api.github.com/users/gautamkumar1')
    return response.json()
}