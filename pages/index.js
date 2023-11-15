import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Developer. </p>
        <p>
          .NET Framework, .NET Core, REST API, 
        </p>
        <p>
          HTML, CSS, JavaScript, AJAX
        </p>
        <p>
          MS SQL SERVER, MYSQL, MONGO DB
        </p>
      </section>
    </Layout>
  )
}