import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../../../context';

const AuthMenu = ({toggleAuthMenu}) => {

    const { loginHandler } = useContext(Authcontext);
  return (
    <div
          className={`absolute right-0 top-9 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${
            toggleAuthMenu ? "block" : "hidden"
          } `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-neutral-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              title="Account settings"
            >
              Account settings
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-neutral-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
              title="Address book"
            >
              Address book
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-neutral-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
              title="My orders"
            >
              My Orders
            </Link>
            <form className='border-t border-t-gray-200'>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sm text-gray-500 hover:text-gray-900 hover:bg-neutral-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
                onClick={loginHandler}
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
  )
}

export default AuthMenu