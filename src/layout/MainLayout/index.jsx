import { NavBar } from '@/components'
import React from 'react'

export function MainLayout({ children }) {
    return (
        <>
            <NavBar />
            <main className='min-h-screen'>
                {children}
            </main>
            <footer className=' text-sm text-center text-gray-400'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius obcaecati et ullam. </footer>
        </>
    )
}
