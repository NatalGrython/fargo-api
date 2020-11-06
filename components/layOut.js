import Link from 'next/link'
import { useRouter } from 'next/router'

export function LayOut({ children }, token, setToken) {
    const router = useRouter()
    const logOut = () => {
        localStorage.removeItem('token')
        router.push('/')
        setToken(undefined)
    }

    if (token === undefined) {
        return (
            <>
                <div id="header">
                    <div id="headerButton">
                        <Link href="/login">
                            <button>Вход</button>
                        </Link>
                    </div>
                </div>
                <main>{children}</main>
            </>
        )
    } else {
        return (
            <>
                <div id="header">
                    <div id="headerButton">
                        <button onClick={logOut}>Выход</button>
                    </div>
                </div>
                <main>{children}</main>
            </>
        )
    }
}
