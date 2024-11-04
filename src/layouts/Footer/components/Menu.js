import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-stretch mb-4">
    <div className="flex flex-col md:mb-0 mb-4">
      <div>
        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
          Our Service
        </h3>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              Returns
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              Shipping
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col md:mb-0 mb-4">
      <div>
        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
          Company
        </h3>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col md:mb-0 mb-4">
      <div>
        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
          Legal
        </h3>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              Terms and Conditions
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="text-base/7 text-gray-600">
              Privacy Policy
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Menu