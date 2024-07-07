'use client'
import React, { useEffect } from 'react' ;
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
  const path = usePathname();
  const navLink = [
    {
      href: '/'
    },
    {
      name: 'About Us',
      href: '/aboutus',
    },
    {
      name: 'Learning',
      href: '/learning',
    },
    {
      name: 'Contact Us',
      href: '/contactus',
    },
  ];
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Image src='/lwslogo.png' alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <Link className="text-primary fw-bold" href="/" style={{ textDecoration: 'none' }}>Learn With Skivy</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavAltMarkup" className="collapse navbar-collapse justify-content-end">
          <div className="navbar-nav">
            {navLink.map((link, index) => {
              const isActive = path === link.href;
              return (
                <Link
                  key={index}
                  className={isActive
                    ? "nav-link text-primary fw-bold active"
                    : "nav-link text-dark"}
                  aria-current="page" href={link.href}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
