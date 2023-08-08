
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as solidLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as regularLightbulb } from '@fortawesome/free-regular-svg-icons';

const Toggler = ({ isDarkTheme, toggleTheme }) =>{
  
  return (
    <FontAwesomeIcon className='toggler' icon={isDarkTheme ? regularLightbulb : solidLightbulb} bounce onClick={toggleTheme}/>
  )

}

export default Toggler;