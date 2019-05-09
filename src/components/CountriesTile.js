import React, {Component} from 'react';
import './CountriesTile.css'

class CountriesTile extends Component {
  constructor(props){
    super(props)
    this.populateStat = this.populateStat.bind(this)
  }

  populateStat(country, stat){
    if (this.props.country[stat]!= "") {
      return(
        <p> {stat}: {this.props.country[stat]} </p>
      )
    }
  };

  render(){
    return(
      <div className = "CountriesTile" style = {{backgroundImage: `url(${this.props.country.flag})`}} >
        <h4>{this.props.country.name}</h4>
        {this.populateStat(this.props.country,'capital')}
        {this.populateStat(this.props.country,'region')}
        {this.populateStat(this.props.country,'subregion')}
        {this.populateStat(this.props.country,'population')}
      </div>
    )
  }
}

export default CountriesTile;
