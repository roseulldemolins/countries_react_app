import React, {Component} from 'react';
import './Options.css'

class Options extends Component {
  constructor(props){
    super(props)
    this.state = {
      countriesData: [],
      category: "",
      choice: ""
    }
    this.countriesData = this.props.countriesData;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.populateCategories = this.populateCategories.bind(this)
    this.handleChoiceChange = this.handleChoiceChange.bind(this)
    this.populateChoices = this.populateChoices.bind(this)

  }

  render(){
    return(
    <div>
      <form onSubmit = {this.handleSubmit}>
        <select
          value = {this.state.category}
          onChange = {this.handleCategoryChange}
        >
          {this.populateCategories()}
        </select>
        <select
          value = {this.state.choice}
          onChange = {this.handleChoiceChange}
        >
        {this.populateChoices()}
        </select>
        <input
          className = "button"
          type = "submit"
          value = "Go!"
        />
      </form>
    </div>
  )
  }

  handleSubmit(event){
    event.preventDefault()
    const array = [];
    this.props.countriesData.forEach((country) => {
      if (country[this.state.category] === this.state.choice)
      {array.push(country)}
    })
    console.log(array);
    this.props.populateSelectedCountriesData(array)
  }

  handleCategoryChange(event){
    this.setState({category: event.target.value})
  }

  handleChoiceChange(event){
    this.setState({choice: event.target.value})
  }

  populateCategories(){
    const array = ["Select your Query", "name", "region", "subregion"]
    const arrayElements = array.map((element, index) => {
      return (<option key={index}>{element}</option>)
    })
    return arrayElements
  }

  populateChoices(){
      const arrChoices = this.props.countriesData.map((country,index,countriesData)=>{
          return(
            country[this.state.category]
          )
        });
      const uniqueArrChoices = []
        arrChoices.forEach((choice,index)=>{
          if (arrChoices.indexOf(choice) === index && choice){
            uniqueArrChoices.push(choice)
          }
        })

      const arrElements = uniqueArrChoices.map((choice,index)=>{
        return(
          <option key={index}>{choice}</option>
        )
      })
      arrElements.unshift(<option defaultValue key={-1}>Select your option</option>)
      return arrElements;
    }


}

export default Options;
