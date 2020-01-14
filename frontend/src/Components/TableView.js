import React from "react";

      /**
       * data  data assign from PowerPlantList.js
       * pagination : data assign from PowerPlantList.js
       */

const TableView = ({ data,pagination }) => {
    return (
      <div>
          <table>
        <thead>
          <tr>
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
      <ul id="page-numbers">
            {pagination}
        </ul>
      </div>
    );
  };
  
  export default TableView;
  