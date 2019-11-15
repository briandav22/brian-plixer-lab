import React, {Component} from 'react';

import AppRouter from "./routers/AppRouter"
import './App.scss';
import ScrutinizerData from './components/ScrutinizerData';



class App extends Component {
  constructor(){
    super()
    this.state = {
      scrutData : []}
  }
  componentDidMount(){
    const exporters = []
    ScrutinizerData().then((response) => {        

      
      response.data.rows.map((row) => {
          
          exporters.push(row[2]['exporter_label'])
           })
           this.setState({scrutData: exporters})
    
      })


  }

  render() {
    return(
      <div className="App">
      <AppRouter exporters = {this.state.scrutData}/>
      
    </div>
    )
  }



}

export default App;