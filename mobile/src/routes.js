import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import Login from './pages/login'
import Book from './pages/book'
import Spots from './pages/spots'


const Routes = createAppContainer(
    createSwitchNavigator({
        Login, Spots, Book 
    })
)

export default Routes