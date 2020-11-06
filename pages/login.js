import Link from 'next/link'
import { LayOut } from '../components/layOut'

export default function Login() {
    return (
        <>
            <LayOut>
                <form method="post">
                    <div>
                        <label for="login">Ваш логин</label>
                        <br />
                        <input type="text" id="login" name="login" required />
                    </div>
                    <hr />
                    <div>
                        <label for="password">Ваш пароль</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <hr />
                    <html>
                        {' '}
                        Вы еще не зарегистрированы?{' '}
                        <Link href="/register">
                            <a> Регистрация </a>
                        </Link>
                    </html>
                    <hr />
                    <div id="login-button">
                        <Link href="/accaunt">
                            <button>Отправить</button>
                        </Link>
                    </div>
                </form>
            </LayOut>
        </>
    )
}
