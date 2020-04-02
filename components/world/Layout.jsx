const layoutStyle = {
  margin: 0,
  padding: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
};

const Layout = props => (
  <div className='main-layout' style={layoutStyle}>
    {props.children}
  </div>
);

export default Layout;
