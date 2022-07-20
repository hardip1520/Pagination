import { useState } from "react";

export const usePagination = (perPageRecords, TotalPageRecords) =>{

    const totalpages = Math.ceil(TotalPageRecords/perPageRecords)
    const [startPage, setStartPage] = useState(0)
    const [endPage, setEndPage] = useState(perPageRecords-1)
    const [currentPage, setCurrentPage] = useState(1)


 const displayPage = (pageNo) =>{
  setCurrentPage(pageNo)
  const end_page_record = perPageRecords*pageNo -1;
  const start_page_record = perPageRecords*pageNo - perPageRecords
  setStartPage(start_page_record)

  if(end_page_record > TotalPageRecords){
     setEndPage(TotalPageRecords-1)
  }
  else{
    setEndPage(end_page_record)
  }
    };
    return[totalpages,startPage,endPage,currentPage,displayPage]
}