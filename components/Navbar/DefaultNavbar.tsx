import React from "react";
import Link from "next/link";

export const DefaultNavbar: React.FC = () => {
    return (
        <div className="bg-base-200 px-4 sm:px-6 lg:px-8 pt-3 pb-6 sticky top-0 z-50 w-full" style={{ zIndex: 99, position: 'absolute', width: '100%' }}>
            <nav className="navbar bg-base-100 rounded-full shadow-lg border border-base-200">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl rounded-full" href="/" title="home">
                        <div className="flex items-center space-x-2">
                            <div className="text-lg font-semibold">Olympus</div>
                        </div>
                    </Link>                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
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
