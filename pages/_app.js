import { useEffect, useRef } from 'react'
import 'tailwindcss/tailwind.css'
import '../style/global.css'

function MyApp({ Component, pageProps }) {
  const count = useRef(0)
  
  useEffect(() => {
    if (window.opener) {
      count.current = window.opener.count + 1; 
    }

    window.count = count.current;
    console.log('window', count.current);
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
