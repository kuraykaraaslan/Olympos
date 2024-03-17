import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const DefaultNavbar = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 pt-3 pb-6 sticky top-0 z-50 w-full bg-gray-100" style={{ zIndex: 99, width: '100%' }}>
            <nav className="navbar bg-primary rounded-full shadow-lg border text-white">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl rounded-full" href="/" title="home">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faMountainSun}
                                className="text-white"
                                aria-hidden="true"
                                style={{ height: 25, width: 25 }}
                            />
                            <div className="text-lg font-semibold">Olympos</div>
                        </div>
                    </Link>                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white text-gray-500" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full  border border-2 border-white">
                                <img alt="Tailwind CSS Navbar component" src="https://picsum.photos/200" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary text-white rounded-box w-52 shadow-lg">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge bg-secondary text-white">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DefaultNavbar;
