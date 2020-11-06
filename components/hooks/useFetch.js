import { useCallback, useState } from 'react'

export const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
            setLoading(true)
            try {
                if (body) {
                    body = JSON.stringify(body)
                    headers['Content-type'] = 'application/json'
                }

                const response = await fetch(url, { method, body, headers })
                const data = await response.json()
                if (!response.ok) {
                    throw new Error('Ошибка приема')
                }

                setLoading(false)
                return data
            } catch (error) {
                setLoading(false)
                setError(error)
                throw error
            }
        }
    )
    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}
