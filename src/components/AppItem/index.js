// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="each-list">
      <img className="app-img" src={imageUrl} alt={appName} />
      <p className="paragraph">{appName}</p>
    </li>
  )
}

export default AppItem
