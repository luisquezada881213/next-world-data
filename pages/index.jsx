import Head from 'next/head';

import Layout from '../components/layouts/Main'
import Particles from '../components/layouts/Particles'

import World from '../containers/World'

export default function Page() {
    return (
        <div>
            <Head>
                <title>World</title>
            </Head>
            <Particles>
                <Layout>
                    <World />
                </Layout>
            </Particles>
        </div>
    )
}