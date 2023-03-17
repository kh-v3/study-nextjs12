import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      <h1>home page!!</h1>
    </Layout>
  )
}

export default Home
