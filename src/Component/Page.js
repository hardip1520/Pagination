import React, { useEffect, useState } from 'react'
import Table from './Table'

const Page = () => {
 const[data,setData] = useState([])
    useEffect(()=>{
        const pageData = async () =>{
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json()
            setData(data)
        };
        pageData();
    },[]);
  return  <> {data.users && data.users.length > 0 ? <Table data={data.users}/> : <p>..Loading</p>}
 </>

}

export default Page