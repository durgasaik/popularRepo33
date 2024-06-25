// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItemDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryItemDetails
  return (
    <li className="repository-item-list">
      <img src={avatarUrl} alt={name} className="avatar-image" />
      <h1 className="repository-heading">{name}</h1>
      <div className="ratings-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="star-image"
        />
        <p className="counts">{starsCount} stars</p>
      </div>
      <div className="ratings-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="star-image"
        />
        <p className="counts">{forksCount} forks</p>
      </div>
      <div className="ratings-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="star-image"
        />
        <p className="counts">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
