import LeftMenu from '../components/leftMenu'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { LayOut } from '../components/layOut'
import { TokenContext } from '../components/context/TokenContext'

export default function Accaunt() {
    const router = useRouter()
    const { name } = router.query
    const { token, setToken } = useContext(TokenContext)

    useEffect(() => {
        if (token === undefined) {
            router.push(`/`)
        }
    }, [])

    return (
        <>
            <LayOut token={token} setToken={setToken}>
                <h1 style={{ position: 'relative', textAlign: 'center' }}>
                    {' '}
                    {name}
                </h1>
                <LeftMenu>
                    <form>
                        <div id="get-button">
                            {/* <button>Расчитать кол-во баллов</button> */}
                        </div>
                    </form>
                </LeftMenu>
            </LayOut>
        </>
    )
}
