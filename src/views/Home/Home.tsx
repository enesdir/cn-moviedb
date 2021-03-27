import Search from '@components/Search'
import Layout from '@layout'

function Home(): JSX.Element {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <Search />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  )
}

export default Home
