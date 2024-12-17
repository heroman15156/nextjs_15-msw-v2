
'use client'

import { useEffect } from 'react'

export default function MSWInitializer() {
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
            const initMocks = async () => {
                if (typeof window !== 'undefined') {
                    const { worker } = await import('@/tests/mocks/browser')
                    await worker.start({
                        onUnhandledRequest: 'bypass',
                    })
                }
            }
            initMocks()
        }
    }, [])

    return null
}
