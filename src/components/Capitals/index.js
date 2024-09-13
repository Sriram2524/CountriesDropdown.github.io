import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capityalValue: countryAndCapitalsList[0].id}

  onChangeCountry = event => {
    this.setState({capityalValue: event.target.value})
  }

  render() {
    const {capityalValue} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            id="status"
            className="select"
            value={capityalValue}
            onChange={this.onChangeCountry}
          >
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label className="label" htmlFor="status">
            is capital of which country?
          </label>
          {countryAndCapitalsList.map(each =>
            each.id === capityalValue ? (
              <p key={each.id} className="para">
                {each.country}
              </p>
            ) : (
              ''
            ),
          )}
        </div>
      </div>
    )
  }
}
export default Capitals
