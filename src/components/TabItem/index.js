// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button onClick={onClickTabItem} type="button" className="btn-element">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
