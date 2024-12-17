import { http, HttpResponse } from 'msw'

export const userHandlers = [
    http.get('/api/users', () => {

        return HttpResponse.json([
            { id: 1, name: '테스트유저1' },
            { id: 2, name: '테스트유저2' }
        ])
    })
]
