import Head from 'next/head';

import Layout from '../components/layouts/Main'

import ContainerMain from '../containers/Container.Main'

import "../style/world.scss"

export default function World() {
    return (
        <div>
            <Head>
                <title>World</title>
            </Head>
            <Layout>
                <ContainerMain />
            </Layout>
        </div>
    )
}