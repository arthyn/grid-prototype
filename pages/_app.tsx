import { useEffect, useRef } from 'react'
import Mousetrap from 'mousetrap'
import 'tailwindcss/tailwind.css'
import '../style/global.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'

declare global {
  interface Window { 
    count: number; 
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const count = useRef(0)
  
  useEffect(() => {
    if (window.opener) {
      count.current = window.opener.count + 1;
      window.opener.document.addEventListener('keydown', event => {
        console.log(event.key);
      }) 
    }

    window.count = count.current;
    console.log('window', count.current);

    Mousetrap.bind(['command+/', 'ctrl+/'], () => {
      window.open('/?leap=search', 'grid')
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
