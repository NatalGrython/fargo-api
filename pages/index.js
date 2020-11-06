import { useContext, useEffect } from 'react'
import { LayOut } from '../components/layOut'
import { useRouter } from 'next/router'
import { TokenContext } from '../components/context/TokenContext'

export default function App() {
    const router = useRouter()

    const { token, setToken } = useContext(TokenContext)

    useEffect(() => {
        if (token) {
            router.push(`/${token}`)
        }
    }, [])

    return (
        <>
            <LayOut token={token} setToken={setToken}>
                <div id="logotip">
                    <img src="/img/logo.png"></img>
                    <h2>
                        Система портфолио студентов на базе блок-чейн технологий
                    </h2>
                </div>
            </LayOut>
        </>
    )
}
