import { Provider } from 'react-redux'
import store from '../../redux/store'

const styles = {
  layoutStyle:{
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden'}
};

const Layout = props => (
  <Provider store={store}>
    <div className='main-layout' style={styles.layoutStyle}>
      <div className={'powered-label'}><a href='https://graphcms.com/'>Powered by<img src={'/graphcms.png'} alt='graphcms'/></a></div>
      {props.children}
    </div>
  </Provider>
);

export default Layout;
