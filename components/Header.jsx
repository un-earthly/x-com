
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

function Header() {
    return (
        <Navbar fluid className='h-32 pt-12  w-full'>
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">X COM</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#">
                    Login
                </Navbar.Link>
                <Navbar.Link as={Link} href="#">
                    Register
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header