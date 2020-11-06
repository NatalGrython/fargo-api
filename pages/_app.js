import { useEffect, useState } from 'react'
import '../public/styles/style.css'
import { TokenContext } from '../components/context/TokenContext'

function MyApp({ Component, pageProps }) {
    const [token, setToken] = useState(undefined)

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    return (
        <>
            <TokenContext.Provider value={{ token, setToken }}>
                <Component {...pageProps} />
            </TokenContext.Provider>
        </>
    )
}

export default MyApp
