// IM working only in Grid1.js App4.js and index.js
import React, {useCallback, useMemo, useRef, useState} from 'react'
import { AgGridReact } from 'ag-grid-react';

import rowDataGrid from './data/rowDataGrid.json'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



const getColumnDefs = () => {
    return [
        {
            field: 'Employee',
            field: 'Age',
            field: 'Country',
            field: 'Position',
            field: 'OnGoingTask',
            field: 'OnProgressTask',
            field: 'AchievedTask',
        }
    ];
};


const Grid1 = () => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => (
        {width: '100%' , height: '100%' }
    ), [] );
    const gridStyle = useMemo(() => (
        { height:'100%', width:'100%' }
    ), []  );
    const [rowData, setRowData] = useState();
    const defaultColDef = useMemo(() =>{
        return {
            sortable: true,
            resizable: true,
            width: 150,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
        };
    }, [] );

    const [columnDefs, setColumnDefs] = useState(getColumnDefs());

    const onGridReady = useCallback((params) => {
        fetch('./rowDataGrid.json')
        .then((resp) => resp.json() )
        .then((data) => setRowData(data) );
    }, [] );
    


    const onSortChanged = useCallback((e) => {
        console.log('Event Sort Changed', e);
      }, []);



    const onColumnResized = useCallback((e) => {
        console.log('Event Column Resized', e);
    }, []);
    

    const onColumnVisible = useCallback((e) => {
        console.log('Event Column Visible', e);
      }, []);


    const onColumnPivotChanged = useCallback((e) => {
        console.log('Event Pivot Changed', e);
     }, []); 



    const onColumnRowGroupChanged = useCallback((e) => {
        console.log('Event Row Group Changed', e);
      }, []);


    const onColumnValueChanged = useCallback((e) => {
        console.log('Event Value Changed', e);
      }, []); 


    const onColumnMoved = useCallback((e) => {
        console.log('Event Column Moved', e);
    }, []);   


    const onColumnPinned = useCallback((e) => {
        console.log('Event Column Pinned', e);
      }, []);


      
      const onBtSortOn = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          if (colDef.field === 'Age') {
            colDef.sort = 'desc';
          }
          if (colDef.field === 'Employee') {
            colDef.sort = 'asc';
          }
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);


    const onBtSortOff = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          colDef.sort = null;
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);



      const onBtWidthNarrow = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          if (colDef.field === 'Age' || colDef.field === 'Employee') {
            colDef.width = 100;
          }
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
      
      


      const onBtWidthNormal = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          colDef.width = 200;
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtHide = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          if (colDef.field === 'Age' || colDef.field === 'Employee') {
            colDef.hide = true;
          }
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);



      const onBtShow = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          colDef.hide = false;
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtPivotOn = useCallback(() => {
        gridRef.current.columnApi.setPivotMode(true);
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          if (colDef.field === 'Country') {
            colDef.pivot = true;
          }
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
      
      
      const onBtPivotOff = useCallback(() => {
        gridRef.current.columnApi.setPivotMode(false);
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          colDef.pivot = false;
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtRowGroupOn = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          if (colDef.field === 'Position') {
            colDef.rowGroup = true;
          }
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtRowGroupOff = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          colDef.rowGroup = false;
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtAggFuncOn = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          if (
            colDef.field === 'OnGoingTask' ||
            colDef.field === 'OnProgressTask' ||
            colDef.field === 'AchievedTask'
          ) {
            colDef.aggFunc = 'sum';
          }
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtAggFuncOff = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          colDef.aggFunc = null;
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtPinnedOn = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          if (colDef.field === 'Employee') {
            colDef.pinned = 'left';
          }
          if (colDef.field === 'Age') {
            colDef.pinned = 'right';
          }
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);
    
      const onBtPinnedOff = useCallback(() => {
        const columnDefs = getColumnDefs();
        columnDefs.forEach(function (colDef) {
          colDef.pinned = null;
        });
        gridRef.current.api.setColumnDefs(columnDefs);
      }, []);



  return (
    <div style={containerStyle}>
    <div className="test-container">
      <div className="test-header">
        <div className="test-button-row">
          <div className="test-button-group">
            <button onClick={onBtSortOn}>Sort On</button>
            <br />
            <button onClick={onBtSortOff}>Sort Off</button>
          </div>
          <div className="test-button-group">
            <button onClick={onBtWidthNarrow}>Width Narrow</button>
            <br />
            <button onClick={onBtWidthNormal}>Width Normal</button>
          </div>
          <div className="test-button-group">
            <button onClick={onBtHide}>Hide Cols</button>
            <br />
            <button onClick={onBtShow}>Show Cols</button>
          </div>
          <div className="test-button-group">
            <button onClick={onBtPivotOn}>Pivot On</button>
            <br />
            <button onClick={onBtPivotOff}>Pivot Off</button>
          </div>
          <div className="test-button-group">
            <button onClick={onBtRowGroupOn}>Row Group On</button>
            <br />
            <button onClick={onBtRowGroupOff}>Row Group Off</button>
          </div>
          <div className="test-button-group">
            <button onClick={onBtAggFuncOn}>Agg Func On</button>
            <br />
            <button onClick={onBtAggFuncOff}>Agg Func Off</button>
          </div>
          <div className="test-button-group">
            <button onClick={onBtPinnedOn}>Pinned On</button>
            <br />
            <button onClick={onBtPinnedOff}>Pinned Off</button>
          </div>
        </div>
      </div>

      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          onSortChanged={onSortChanged}
          onColumnResized={onColumnResized}
          onColumnVisible={onColumnVisible}
          onColumnPivotChanged={onColumnPivotChanged}
          onColumnRowGroupChanged={onColumnRowGroupChanged}
          onColumnValueChanged={onColumnValueChanged}
          onColumnMoved={onColumnMoved}
          onColumnPinned={onColumnPinned}
        ></AgGridReact>
      </div>
    </div>
  </div>
  )
}

export default Grid1