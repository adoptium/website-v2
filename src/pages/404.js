import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <div className='container text-center my-5'>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>

  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
