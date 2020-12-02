import React, { useState } from 'react';
import { PDFReader } from 'reactjs-pdf-reader';

const Test = () => {
  const [page, setPage] = useState(1);
  let totalPage = 1;

  return <PDFReader width='500'
    page={page}
    scale={1.5}
    onDocumentComplete={number => totalPage = number}
    url="https://cors-anywhere.herokuapp.com/http://www.daitangkinh.org/images//lspbdtk/T103/T103%20TQL%201%20(003)%20Trung%20Lu%E1%BA%ADn%20Q1-Qu%C3%A1n%20V%E1%BB%81%20S%C3%A1u%20T%C3%ACnh%20(C%C4%83n).pdf" />
}

export default Test