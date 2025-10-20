'use client'

import { Link } from 'react-router-dom'
import { BurgerIcon, CloseIcon, Logo } from '../../utils/icons'
import { navigation } from '../../appData'
import useOutsideClick from '../hooks/useOutsideClick'
import { useContext } from 'react'
import { storeContext } from '../Context/storeContext'


const Navbar = () => {
  
  const {isVisible,setIsVisible}=useContext(storeContext);

  const toggleMenu = () => setIsVisible(!isVisible)
  const navRef = useOutsideClick(() => setIsVisible(false))

  return (
    <nav ref={navRef} className="sticky left-0 top-0 border-b border-border w-full h-16 z-50 bg-white dark:bg-black/40 backdrop-blur-3xl">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1 text-black ">
        {/* --- Logo Section --- */}
        {isVisible ? (
          <div className=" md:hidden text-black dark:text-neutral-200 text-2xl font-semibold">Menu</div>
        ) : (
          <Link to="/" onClick={() => setIsVisible(false)}>
            <div className="flex items-center gap-3 transition-all duration-300">
              <Logo />
              <span className="text-black text-4xl dark:text-neutral-200 uppercase">Portfolio</span>
            </div>
          </Link>
        )}

        {/* --- Burger Icon --- */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            // aria-label={isVisible ? 'Close menu' : 'Open menu'}
          >
            {isVisible ? (
              <CloseIcon className='text-black dark:text-neutral-200' />
            ) : (
              <BurgerIcon className='text-black dark:text-neutral-200' />
            )}
          </button>
        </div>

        {/* --- Nav Links --- */}
        <ul
          className={`
            ${isVisible ? 'flex bg-white dark:bg-blue-950' : 'hidden'}
            flex-col absolute top-16 left-0 z-210 w-full h-[calc(100vh)-8rem]
             text-black dark:text-white
            md:static md:flex md:h-auto md:w-auto md:flex-row md:items-center
            transition-all duration-300 ease-in-out
          `}
        >
          {navigation.map(( link ) => (
            <li
              key={link.href}
              onClick={() => setIsVisible(false)}
              className="border-border md:border-0 text-black dark:text-white"
            >
              <a
                href={link.href}
                className={`block px-6 py-4 text-2xl font-semibold md:px-4 md:py-0 md:text-base 
                hover:text-blue-400 transition-all duration-150  ${isVisible?'border-b':''}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
