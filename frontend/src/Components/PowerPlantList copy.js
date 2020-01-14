import React, { Component } from 'react'
import axios from 'axios';
import TableView from './TableView';
 const URL_PATH = 'https://reactdemoapi.herokuapp.com/power-plants';
//const URL_PATH = 'http://localhost:8081/power-plants';
 
 

export default class PowerPlantList extends Component {
    
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
        this.state = {
          data: [],
          filter:"",
          productionValue:"",
          view:'table',
          currentPage: 1
        }
        this._loadData = this._loadData.bind(this);
        
      }

     componentWillMount(){
        this._loadData() // first time loading the data
        setInterval(()=> this._loadData(), 10000) // data will after 10 second
       
     }

     filterType(e){
        this.setState({filter: e.target.value})
      }
     
      filterProductionValue(e){
        this.setState({productionValue: e.target.value})
      }

     _loadData() {
        const {   data } = this.state;
        axios.get(URL_PATH).then(response => {
         console.log(response); 
          this.setState({
            data: response.data,
            
          });
          
        });
      }

      onClick(){
        console.log(this.state.view)
        this.setState({view: 'map'}, () => { 
            
        });
                      
      }

    render() {
      // filter type
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

      //  productionValue sorting
      if(this.state.productionValue){
        console.log(this.state.productionValue)
        if(this.state.productionValue == 'desc'){
            getData.sort((a, b) => b.production_value_kw - a.production_value_kw);
        } else if(this.state.productionValue == 'asc'){
            getData.sort((a, b) => a.production_value_kw - b.production_value_kw);    
        } 
    } 
      
       
        return (
            
          <div className="container"> 
            <h3>Power Plants</h3>
            <div className="row">
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
                  <div className="col m4 s4 center-align">
                  <label>Production Value (Max or Min)</label>
                      <select onChange={this.filterProductionValue.bind(this)} value={this.state.filterProductionValue} className="browser-default">
                          <option value="">Select Production Value</option>
                          <option value="desc">Production Value Max</option>
                          <option value="asc">Production Value Min</option>
                      </select>
                   </div>
              </div> 
           {/* Table View */}
          <TableView data={getData}  /> 
            </div>
        )
    }
}
