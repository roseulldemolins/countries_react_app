import React, {Component} from 'react';
import Options from '../components/Options';
import CountriesContainer from '../components/CountriesContainer';

class MasterBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      countriesData: [],
      selectedCountriesData: []
    }
    this.populateSelectedCountriesData = this.populateSelectedCountriesData.bind(this)
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        this.setState({countriesData: data})
      })
  }
  render(){
    return(
    <div>
      <Options countriesData = {this.state.countriesData} populateSelectedCountriesData = {this.populateSelectedCountriesData}/>
      <CountriesContainer selectedCountriesData = {this.state.selectedCountriesData}/>
    </div>
    )
  }

  populateSelectedCountriesData(array){
    this.setState({selectedCountriesData: array})
  }
}

export default MasterBox;
