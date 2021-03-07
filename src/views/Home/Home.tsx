import Search from '@components/Search'
import Title from '@components/Title'
import Layout from '@layout'

function Home(): JSX.Element {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <Title>Welcome to CN-MOVIEDB</Title>

        <Search />
      </Layout.Content>

      <Layout.Footer />
    </Layout>
  )
}

export default Home
