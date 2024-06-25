// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersDetails, setActiveLanguageId, isActive} = props
  const {id, language} = languageFiltersDetails
  const buttonClassName = isActive ? 'language-item active' : 'language-item'

  const onClickLanguage = () => {
    setActiveLanguageId(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickLanguage}
        className={buttonClassName}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
