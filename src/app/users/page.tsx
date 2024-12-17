'use client'

import { useEffect, useState } from 'react'

interface User {
    id: number
    name: string
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users')
                if (!response.ok) {
                    throw new Error('Failed to fetch users')
                }
                const data = await response.json()
                setUsers(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error fetching users')
            } finally {
                setIsLoading(false)
            }
        }

        fetchUsers()
    }, [])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="mb-2">
                        {user.name} (ID: {user.id})
                    </li>
                ))}
            </ul>
        </div>
    )
}
