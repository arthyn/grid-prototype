import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface AppProps {
  query?: Record<string, string | string[]>;
}

const App: NextPage<AppProps> = ({ query }) => {
  return (
    <div className="font-sans w-screen h-screen flex">
      <Head>
        <title>{ query.name }</title>
      </Head>
      <div className="w-96 h-full bg-white p-6 border-r-2 border-silver">
        <div className="flex items-center">
          <div style={{ backgroundColor: query.color as string }} className="mr-2 w-6 h-6 rounded-full" />
          <h3>{ query.name }</h3>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className="flex items-center pl-4 w-full h-16 border-b-2 border-silver">
          <Link href="/">
            <a target="grid">&laquo; Home</a>
          </Link>
        </div>
        <div className="w-full h-16 border-t-2 border-silver" />
      </div>
    </div>
  )
}

App.getInitialProps = ({ query }) => {
  return { query };
}

export default App;