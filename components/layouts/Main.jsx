import { Provider } from 'react-redux'
import store from '../../redux/store'

const layoutStyle = {
  margin: 0,
  padding: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
};

const Layout = props => (
  <Provider store={store}>
    <div className='main-layout' style={layoutStyle}>
      {props.children}
    </div>
  </Provider>
);

export default Layout;
