'use client'
import {useState, useEffect} from 'react'
import {Sling as Hamburger} from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitch from '../(ui)/ThemeSwitch'

const links = [
  {href: '/', label: 'Home'},
  {href: '/calendar', label: 'Calendar'},
  {href: 'https://sway-bae-shop.fourthwall.com/', label: 'Store'},
]

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [clickedOutside, setClickedOutside] = useState(false)

  const closeDropdownOnOutsideClick = (event) => {
    if (isOpen && !event.target.closest('.dropdown')) {
      closeDropdown()
      setClickedOutside(true)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeDropdownOnOutsideClick)
    return () => {
      document.removeEventListener('click', closeDropdownOnOutsideClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const toggleDropdown = () => {
    setOpen(!isOpen)
    setClickedOutside(false)
  }

  const closeDropdown = () => {
    setOpen(false)
    setClickedOutside(false)
  }

  const handleLinkClick = () => {
    closeDropdown()
  }

  return (
    <header className='top-0 w-full'>
      <nav className='navbar relative'>
        <div className='navbar-start px-1'>
          <div className='mask mask-heart hidden h-10 w-10 lg:block'>
            <Link href='/'>
              <Image src='/avatar.png' alt='Logo' height={40} width={40} />
            </Link>
          </div>
          <Link href='/'>
            <p className='hidden bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text px-1 text-sm font-bold text-transparent lg:block'>
              Creator
              <br />
              of Chaos
            </p>
          </Link>
          <div className='dropdown z-[100]' style={{position: 'relative'}}>
            <button
              tabIndex={0}
              className='lg:hidden'
              onClick={toggleDropdown}
              aria-label='Toggle Menu'
              style={{
                paddingTop: '0.5rem',
              }}
            >
              <Hamburger size={24} toggled={!clickedOutside && isOpen} />
            </button>
            {isOpen && (
              <ul
                tabIndex={0}
                className='menu dropdown-content z-[100] mx-[-12px] flex bg-base-100 text-base-content'
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    closeDropdown()
                  }
                }}
                onBlur={() => {
                  closeDropdown()
                }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  width: '100vw',
                  height: '100vh',
                  left: '0',
                }}
              >
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`${
                        link.label === 'New Blog!' ? 'text-primary hover:text-secondary' : ''
                      } relative z-[100] bg-base-200 bg-clip-text p-4 text-6xl hover:text-secondary hover:underline hover:underline-offset-4 `}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className='navbar-center z-[100] px-1'>
          <ul className='menu menu-horizontal mx-auto hidden items-center justify-center text-lg lg:flex xl:space-x-8 2xl:space-x-10 3xl:space-x-14'>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    link.label === 'New Blog!' ? 'text-primary hover:text-secondary' : ''
                  } relative bg-base-200 bg-clip-text hover:text-secondary hover:underline hover:underline-offset-4 `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='mask mask-heart block h-10 w-10 lg:hidden'>
            <Link href='/'>
              <Image src='/avatar.png' alt='Logo' height={40} width={40} />
            </Link>
          </div>
          <Link href='/'>
            <p className='block bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text px-1 text-sm font-bold text-transparent lg:hidden'>
              Creator
              <br />
              of Chaos
            </p>
          </Link>
        </div>

        <div className='navbar-end z-[100] px-1'>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  )
}
