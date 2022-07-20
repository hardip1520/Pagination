import React from "react";
import Pagination from '@mui/material/Pagination';
import { usePagination } from "../Hooks/Pagination";

const Table = ({ data }) => {
  const [totalpages, startPage, endPage, displayPage] =
    usePagination(5, data.length);
    

  return (
    <>
  <h1>newnen</h1>
      {(() => {
        const displayData = [];
        
        for (let i = startPage; i <= endPage; i++) {
         
          displayData.push(
            
            <div key={data[i].id}>
              
              <table>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last name</th>
                </tr>
                <tr>
                  <td>{data[i].id}</td>
                  <td>{data[i].lastName}</td>
                  <td>{data[i].email}</td>
                </tr>
              </table>
            </div>
          );
        }
        return displayData;
      })()}

      <Pagination  
      count={totalpages}
      onChange={(event,value)=>displayPage(value)}
      />
    </>
  );
};

export default Table;
