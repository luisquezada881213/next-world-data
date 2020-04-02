import React from 'react'
import Particles from 'react-particles-js';

// configuration file
import config from '../../config/particles.json'

const Layout = ({ children }) => {

    return (<div id="particles-js"><Particles
    params={config} />{children}</div>)
}

export default Layout