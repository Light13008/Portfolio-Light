"use client";

// Import React
import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation"; 

const links = [
    {
        name: 'Home',
        path: '/',
    }, 
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'Resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'Contact',
        path: '/contact',

    }
]


// Nav component
const Nav = () => {
    const pathname = usePathname(); 
    console.log(pathname)
  return (<nav className='flex gap-8 '>
        {
            links.map((link, index) => {
                return <Link  href={link.path } key={index} className=' ${link.path === pathname && "text-accent obrder-b-2 boder-accent"} capitalize font-medium hover:text-accent transition-all }'>
                    {link.name}
                </Link>
            })
        }
      
    </nav>
  );
}

// Export Nav
export default Nav;
