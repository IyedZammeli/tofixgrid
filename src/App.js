import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './App.css'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


var savedSort;


const App = () => {
    const [rowData] = useState([
        { EmpName: "Iyed Zammeli", Position: "Developer", Salary: 35000 },
        { EmpName: "Malek BMhara", Position: "Developer", Salary: 32000 },
        { EmpName: "Cristiano ronaldo", Position: "Developer", Salary: 72000 }
    ]);

    const [sortable, setSORT] = useState(false)



  /*  console.log(sortable)*/




    /* if (sortable)
      {const [columnDefs] = useState([
        { field: "make", sortable :true },
        { field: "Position", sortable :true },
        { field: "Salary", sortable :true },
      ]);}
      else {
        const [columnDefs] = useState([
          { field: "make" },
          { field: "Position" },
          { field: "Salary" },
        ]);
      } */

    /* const [columnDefs] = sortable ? (useState([
      { field: "make", sortable : true },
      { field: "Position", sortable : true },
      { field: "Salary", sortable : true },
    ])) : (const [columnDefs] = useState([
      { field: "make" },
      { field: "Position" },
      { field: "Salary" },
    ])) */

    let [columnDefs, setColumnsDefs] = useState([
        { field: "EmpName", sortable: true, sort: 'desc' },
        { field: "Position", sortable: true,sort: 'desc' },
        { field: "Salary", sortable: true, sort: 'desc' },
    ])


    

    const sortHandler = () => {
        setColumnsDefs(() => {
            return [
                { field: "EmpName", sort : 'asc' },
                { field: "Position",sort:'asc' },
                { field: "Salary", sort:'asc'  },
            ]
        })
    }

    const sortHandler2 = () => {
        setColumnsDefs(() => {
            return [
                { field: "EmpName", sortable: true },
                { field: "Position", sortable: true },
                { field: "Salary", sortable: true },
            ]
        })
    }

    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>



                <AgGridReact 
                    rowData={rowData}
                    columnDefs={columnDefs}
                >
                </AgGridReact>
                <div
                    className='container'
                >
                    <button className='btn-1' onClick={sortHandler}> no sort   </button>
                    <button className='btn-1' onClick={sortHandler2}> sort   </button>
                </div>

            </div>
        </div>


    );
};


export default App;
