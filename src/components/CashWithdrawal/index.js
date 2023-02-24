// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDeduct = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const {id, value} = denominationsList
    return (
      <div className="app-container ">
        <div className="balance-container">
          <div className="name-container">
            <p className="initial-icon">S</p>
            <h1 className="main-heading">Sarah Williams</h1>
          </div>
          <div className="balance-display-container">
            <p className="sub-heading">Your Balance</p>
            <p className="main-heading">{balance}</p>
          </div>
          <p className="rupee-text">In Rupees</p>
          <div className="withdraw-container">
            <p className="main-heading">Withdraw</p>
            <p className="sub-heading">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(eachValue => (
                <DenominationItem
                  key={eachValue.id}
                  denominationsList={eachValue}
                  onDeduct={this.onDeduct}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
