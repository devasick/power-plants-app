import React from "react";

 

const TableView = ({ data }) => {
    return (
      <div>
          <table>
        <thead>
          <tr>
              <th>S.No</th>
              <th>Bundesnetza gentur Number</th>
              <th>Company</th>
              <th>Type</th>
              <th>State</th>
              <th>Production Value (kW)</th>
              <th>Agg.Production (kW)</th>
          </tr>
        </thead>
        <tbody>
        {data.map((row, i)=>(
          
          <tr key={i} className={ i%2 ==0? 'white-bg' : 'gray-bg'}>  
            <td>{i+1}</td>
            <td>{row.bundesnetzagentur_number}</td>
            <td>{row.comapny_name}</td>
            <td>{row.type}</td>
            <td>{row.state}</td>
            <td>{row.production_value_kw}</td>
            <td>{row.aggregated_production_kw}</td>
          </tr>
          ))} 
        
        </tbody>
      </table>  
      </div>
    );
  };
  
  export default TableView;
  