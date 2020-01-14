import React, { Component } from 'react'
import axios from 'axios';
import TableView from './TableView';
 const URL_PATH = 'https://reactdemoapi.herokuapp.com/power-plants';
//const URL_PATH = 'http://localhost:8081/power-plants';
 
 
    /**
     * @public
     * @class
     * PowerPlantList to get json object and displayed it.
     */
export default class PowerPlantList extends Component {
    /**
     * @public
     * @function
     * It can be used to bind event handlers to the component and/or initializing the local state of the component
     * data [] - initializing json values in array
     * filter - filter type
     * productionValue - sorting max or min values
     */
    constructor(props){
        super(props)
        this.state = {
          data: [],
          filter:"",
          productionValue:"",
          currentPage: 1,
          PowerPlantsPerPage: 10
        }
        this._loadData = this._loadData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
      }
    /**
     * @function
     * this function for load data 
     * setInterval  -   data  will updating every 10 seconds
     */

     componentWillMount(){
        this._loadData() // first time loading the data
        setInterval(()=> this._loadData(), 10000) // data will after 10 seconds
       
     }
     /**
       * @function
       * this function for set state value for filter type
       * filter  -   set state value WIND_ONSHORE | WIND_OFFSHORE | HYDRO | BIOMASS
       */

     filterType(e){
        this.setState({filter: e.target.value})
      }

      /**
       * @function
       * this function for sorting to set state Descending & Acending
       * filter  -   set state value desc & asc
       */
     
      filterProductionValue(e){
        this.setState({productionValue: e.target.value})
      }

      /**
       * @function
       * this function for fetching data from json url
       * data  -   response data store to data variable
       */

     _loadData() {
        const {   data } = this.state;
        axios.get(URL_PATH).then(response => {
         console.log(response); 
          this.setState({
            data: response.data,
            
          });
          
        });
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    

    render() {
      // filter type
       /**
       * filer the data when we change the drop down 
       * else : default list view
       */
      let getData;
      if(this.state.filter !='') {
        getData = this.state.data.filter(
        (dt) =>{
          console.log(dt.type)
          return dt.type === this.state.filter;
        }
      );
      } else {
         getData =  this.state.data;
      }

        /**
       * filer the data when we change the drop down 
       * productionValue : DESC & ASC data will display max or min value
       */
       //  productionValue sorting
       if(this.state.productionValue){
        console.log(this.state.productionValue)
        if(this.state.productionValue == 'desc'){
            getData.sort((a, b) => b.production_value_kw - a.production_value_kw);
        } else if(this.state.productionValue == 'asc'){
            getData.sort((a, b) => a.production_value_kw - b.production_value_kw);    
        } 
       } 

      const {  currentPage, PowerPlantsPerPage } = this.state;
      const indexOfLastTodo = currentPage * PowerPlantsPerPage;
      const indexOfFirstTodo = indexOfLastTodo - PowerPlantsPerPage;
      const currentPowerPlants = getData.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderPowerPlants = currentPowerPlants.map((data, index) => {
        console.log(index)
        return data;
      });
       
      const pageNumbers = [];
      const pageLength = getData.length;
      for (let i = 1; i <= Math.ceil(pageLength / PowerPlantsPerPage); i++) {
        console.log(pageNumbers);
        
        pageNumbers.push(i);
        
      }
      
       /**
       * renderPageNumbers display the pagination 
        */
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

     
        return (
            
          <div className="container"> 
            <h3>Power Plants</h3>
            <div className="row">
              {/* drop down for type */}
                  <div className="col m4 s4 center-align">
                      <label>Filter</label>
                      <select onChange={this.filterType.bind(this)} value={this.state.filterType} className="browser-default">
                          <option value="">Select Type</option>
                          <option value="WIND_ONSHORE">On Shore</option>
                          <option value="WIND_OFFSHORE">Off Shore</option>
                          <option value="HYDRO">Hydro</option>
                          <option value="BIOMASS">BIOMASS</option>
                      </select>
                  </div>
                  {/* drop down value Production Value */}
                  <div className="col m4 s4 center-align">
                  <label>Production Value (Max or Min)</label>
                      <select onChange={this.filterProductionValue.bind(this)} value={this.state.filterProductionValue} className="browser-default">
                          <option value="">Select Production Value</option>
                          <option value="desc">Production Value Max</option>
                          <option value="asc">Production Value Min</option>
                      </select>
                   </div>
              </div> 
           {/* Table */}
          <TableView data={renderPowerPlants} pagination={renderPageNumbers}  /> 
         
            </div>
        )
    }
}
