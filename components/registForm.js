import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { TokenContext } from './context/TokenContext'
import { useFetch } from './hooks/useFetch'

export default function RegistForm() {
    const [form, setForm] = useState({})
    const { token } = useContext(TokenContext)

    const { loading, error, request, clearError } = useFetch()
    const router = useRouter()
    const changeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const registerHander = async event => {
        try {
            event.preventDefault()
            const data = await request('/api/auth/register', 'POST', {
                ...form,
            })

            localStorage.setItem('token', data.token)

            router.push(`/${data.token}`)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (token) {
            router.push(`/${token}`)
        }
    }, [])

    return (
        <>
            <form>
                <div>
                    <label htmlFor="name">ФИО</label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={changeHandler}
                    />
                </div>
                <hr />
                <div>
                    <label htmlFor="email">Адрес эл.почты</label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={changeHandler}
                    />
                </div>
                <hr />
                <div>
                    <label htmlFor="pass">Придумайте пароль</label>
                    <br />
                    <input
                        type="password"
                        id="pass"
                        name="pass"
                        required
                        onChange={changeHandler}
                    />
                </div>
                <hr />
                <div>
                    <label htmlFor="valpass">Повторите пароль</label>
                    <br />
                    <input
                        type="password"
                        id="valpass"
                        name="valpass"
                        required
                        onChange={changeHandler}
                    />
                </div>
                <hr />
                <div id="registr-button">
                    <button type="submit" onClick={registerHander}>
                        Отправить
                    </button>
                </div>
            </form>
        </>
    )
}
