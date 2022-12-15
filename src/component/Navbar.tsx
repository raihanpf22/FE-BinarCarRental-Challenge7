import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <div className="flex justify-between px-8 py-4 bg-base-color-grey">
        <div className="bg-dark-blue-05 text-white px-4 py-2">
          Binar Car Rental
        </div>
        <div className="hidden lg:flex gap-5 items-center font-normal text-sm">
          <p className="cursor-pointer hover:font-semibold">Our Service</p>
          <p className="cursor-pointer hover:font-semibold">Why Us</p>
          <p className="cursor-pointer hover:font-semibold">Testimonial</p>
          <p className="cursor-pointer hover:font-semibold">FAQ</p>

          <Link to={"/register"}>
            <button className="px-4 py-2 rounded-md bg-lime-green-04 text-white hover:font-semibold">
              Register
            </button>
          </Link>
        </div>
      </div>
      <div className="drawer absolute -my-14 lg:hidden drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content absolute mx-68">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-active bg-white"
          >
            <div className="block lg:hidden space-y-2 cursor-pointer">
              <div className="w-8 h-0.5 bg-gray-600 animate-pulse"></div>
              <div className="w-8 h-0.5 bg-gray-600 animate-pulse"></div>
              <div className="w-8 h-0.5 bg-gray-600 animate-pulse"></div>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <div className="flex justify-between font-bold">
              <div>
                <p>BCR</p>
              </div>
              <label htmlFor="my-drawer-4">
                <img src="/fi_x.svg" alt="" />
              </label>
            </div>
            <li className="mt-5">
              <a>Our Services</a>
            </li>
            <li>
              <a>Why Us</a>
            </li>
            <li>
              <a>Testimony</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
