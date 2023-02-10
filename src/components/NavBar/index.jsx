import { publicRoutes, routes } from '@/App'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { Button } from '..';

export function NavBar() {
    const [cookie, , removeCookie] = useCookies(["token"]);

    const allRoutes = !cookie.token ? [...routes, ...publicRoutes] : routes
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {allRoutes.map(route => (
                            !route.hide && <li key={route.path}>
                                <NavLink end to={route.path} className={
                                    (link) => `"block py-2 pl-3 pr-4 rounded
                                     text-white ${link.isActive ? "bg-blue-700  md:text-blue-700" : "bg-gray-700  md:text-gray-700"}
                                      md:bg-transparent  md:p-0 dark:text-white"`
                                } aria-current="page">{route.name}</NavLink>
                            </li>
                        ))}
                        {cookie.token && <Button onClick={() => removeCookie("token")}>Log Out</Button>}
                    </ul>
                </div>
            </div>
        </nav>

    )
}
