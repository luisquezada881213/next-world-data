import Head from 'next/head';

import Layout from '../components/Component.Layout'

import ContainerMain from '../containers/Container.Main'

export default function World() {
    return (
        <div>
            <Head>
                <title>World</title>
            </Head>
            <Layout>
                <ContainerMain />
                <style jsx global>{`
                    body {
                        margin: 0px;
                        overflow: hidden;
                    }

                    .world-main-container {
                        height: 100vh;
                        width: 100vw;
                    }

                    .world-main-container>div {
                        height: 100%;
                    }

                    .world-main-container-right div:nth-child(1) {
                        height: 40%;
                    }

                    .world-main-container-right div:nth-child(2) {
                        height: 54%;
                    }

                    .world-flag {
                        width: 90%;
                        cursor: pointer;
                    }

                    #map-container {
                        height: 603px;
                        width: 468px;
                    }

                    .world-main-container-flags {
                        height: 100%;
                    }

                    #country-population-body{
                        height: 500px;
                        width: 650px;
                    }
      `}</style>
            </Layout>
        </div>
    )
}