import Link from 'next/link'

export default function LeftMenu({ children }) {
    return (
        <>
            <div className="left_menu">
                <Link href="/accaunt">
                    <a>Общий ретинг</a>
                </Link>
                <Link href="/change">
                    <a>Изменения рейтинга</a>
                </Link>
                <Link href="/achiv">
                    <a>Достижения</a>
                </Link>
                <Link href="/predmet">
                    <a>Оценки</a>
                </Link>
                <Link href="/download">
                    <a>Загрузить сертификат</a>
                </Link>
                <main>{children}</main>
            </div>
        </>
    )
}
