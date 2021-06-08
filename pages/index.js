import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/request'

export default function Home({result}) {
  // console.log(result)
  // console.log(`https://api.themoviedb.org/3${requests.fetchTrending.url}`)
  // console.log(`https://api.themoviedb.org/3/trending/all/week?api_key=4133306cf13a5cf3c2e4da7dff3e2231`)
  return (
    <div className="">
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Lorem ipsums" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header/>
      <Navbar/>
      <Results result={result}/>
      <footer>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  
  const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||requests.fetchTrending.url}`)
  const data = await res.json()  
  try {
    if (!data) {
      return {
        notFound: true,
      }
    }
    
  
    return {
      props: {result: data} // will be passed to the page component as props
    }
  } catch (error) {
    console.log(error);
  }
}