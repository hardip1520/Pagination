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
              
          <h1>{data[i].firstName}</h1>
            </div>
          );
        }
        return displayData;
      })()}

      <Pagination  color="primary"
      count={totalpages}
      onChange={(event,value)=>displayPage(value)}
      />
    </>
  );
};

export default Table;
