import Head from 'next/head';

import Layout from '../components/layouts/Main'
import Particles from '../components/layouts/Particles'

import ContainerMain from '../containers/Container.Main'

import "../style/world.scss"

export default function World() {
    return (
        <div>
            <Head>
                <title>World</title>
            </Head>
            <Particles>
                <Layout>
                    <ContainerMain />
                </Layout>
            </Particles>
        </div>
    )
}