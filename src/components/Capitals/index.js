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

class Capitals extends Component {
  state = {isCountry: countryAndCapitalsList[0].id}

  onSelected = event => {
    const {isCountry} = this.state
    this.setState({isCountry: event.target.value})
  }

  getActiveCapital = () => {
    const {isCountry} = this.state

    const filteredData = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isCountry,
    )

    return filteredData.country
  }

  render() {
    const {isCountry} = this.state
    const findActiveCapital = this.getActiveCapital(isCountry)

    return (
      <div className="bg-con">
        <div className="bg-card-con">
          <div className="card-con">
            <h1 className="header">Countries and Capitals</h1>
            <select
              className="selected-country"
              value={isCountry}
              onChange={this.onSelected}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {' '}
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="label"> is capital of which country?</p>
            <p className="capital">{findActiveCapital}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
