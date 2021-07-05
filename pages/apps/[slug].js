import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({ query }) {
  // const router = useRouter()
  console.log(query);

  return (
    <div className="w-screen h-screen flex">
    <Head>
      <title>{query.name}</title>
    </Head>
      <div className="w-96 h-full bg-white p-6 border-r-2 border-silver">
        <div className="flex items-center">
          <div style={{backgroundColor:query.color}} className="mr-2 w-6 h-6 rounded-full" />
          <h3>{query.name}</h3>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className="w-full h-16 border-b-2 border-silver" />
        <div className="w-full h-16 border-t-2 border-silver" />
      </div>
    </div>
  )
}

App.getInitialProps = ({query}) => {
  return {query}
}