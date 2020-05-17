import { Provider } from 'react-redux'
import store from '../../redux/store'

const Layout = props => (
  <Provider store={store}>
    <div className='main-layout'>
      {props.children}
    </div>
  </Provider>
);

export default Layout;
