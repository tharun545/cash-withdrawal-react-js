// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, onDeduct} = props
  const {id, value} = denominationsList

  const onDeductAmount = () => {
    onDeduct(value)
  }

  return (
    <li className="button-list-container">
      <button className="button" onClick={onDeductAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
