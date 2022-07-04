import * as React from 'react'
import { graphql } from 'gatsby'
import { Link, Trans } from 'gatsby-plugin-react-i18next'
import { FaArrowCircleRight } from 'react-icons/fa'

import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import DownloadDropdowns from '../../components/DownloadDropdowns'
import DownloadTable from '../../components/TemurinDownloadTable'
import ChecksumModal from '../../components/ChecksumModal'
import { loadLatestAssets } from '../../hooks'

const TemurinReleases = () => (
  <Layout>
    <Seo title='Latest releases' />
    <section className='py-5 text-center container'>
      <div className='row py-lg-5'>
        <div className='col-lg-10 col-md-8 mx-auto'>
          <h1 className='fw-light'>Eclipse Temurin™ Latest Releases</h1>
          <div className='row align-items-center pt-3'>
            <div className='col-6 col-md-4'>
              <img
                src='/images/temurin-light.png'
                width={120}
                alt='Temurin logo'
                className='img-fluid'
              />
            </div>
            <div className='col-12 col-sm-6 col-md-8'>
              <p className='text-start'>
                Eclipse Temurin is the open source Java SE build based upon OpenJDK.
                Temurin is available for a <a href='/supported-platforms'>wide range of platforms</a> and Java SE versions.
                The latest releases recommended for use in production are listed below, and are regularly <a href='/support'>updated and supported</a> by the Adoptium community. Migration help, container images and package installation guides are available in the <a href='/docs'>documentation section</a>.
                You can read the <a href='https://foojay.io/java-17/?tab=component' target='_blank' rel='noreferrer'>Release Notes</a> for each version thanks to our friends at Foojay.io!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row align-items-center pt-3'>
        <p className='text-center'>
          Use the drop-down boxes below to filter the list of current releases.
        </p>
      </div>
      <DownloadDropdowns updaterAction={loadLatestAssets} marketplace={false} Table={DownloadTable} />
      <ChecksumModal />
      <div className='row align-items-center pt-3'>
        <p className='text-center'>
          Previous releases are available in the Temurin archive.
        </p>
        <div className='btn-group-vertical col-6 mx-auto'>
          <Link to='/temurin/archive' className='btn btn btn-primary mt-3'>
            <Trans>Release Archive</Trans> <FaArrowCircleRight />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default TemurinReleases

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
