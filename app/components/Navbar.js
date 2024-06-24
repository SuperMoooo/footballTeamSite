import Image from 'next/image';
import React from 'react';
import logo from '../assets/imgs/fpf-logo-text.webp';
import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="w-full px-6 py-3  fixed z-50 bg-[#21212148] top-0 left-0">
            <ul className="flex items-center sm:justify-center justify-between w-full">
                <li className="flex flex-row space-x-3 items-center">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt={logo}
                            width={75}
                            className="h-full"
                        />
                    </Link>
                </li>
                <li className="text-center hidden md:text-lg text-sm *:uppercase sm:flex flex-row items-center justify-center space-x-2 md:space-x-4 flex-1 *:cursor-pointer  ">
                    <Link href="#" className="hover:text-red-700">
                        Link 1
                    </Link>
                    <div className="w-[1px] h-8 bg-[#383838]"></div>
                    <Link href="#" className="hover:text-red-700">
                        Link 2
                    </Link>
                    <div className="w-[1px] h-8 bg-[#383838]"></div>
                    <Link href="#" className="hover:text-red-700">
                        Link 3
                    </Link>
                    <div className="w-[1px] h-8 bg-[#383838]"></div>
                    <Link href="#" className="hover:text-red-700">
                        Link 4
                    </Link>
                    <div className="w-[1px] h-8 bg-[#383838]"></div>
                    <Link href="#" className="hover:text-red-700">
                        Link 5
                    </Link>
                </li>
                <li className="text-right flex flex-row items-center space-x-8">
                    <div className="cursor-pointer">
                        <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            width="45"
                            height="45"
                        >
                            <path
                                d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                                fillRule="nonzero"
                            />
                        </svg>
                    </div>
                    {/* SideBar Menu */}
                    <div className="drawer drawer-end ">
                        <input
                            id="my-drawer-4"
                            type="checkbox"
                            className="drawer-toggle"
                        />
                        <div className="drawer-content flex flex-col">
                            {/* Page content here */}
                            <label
                                htmlFor="my-drawer-4"
                                className="drawer-button cursor-pointer"
                            >
                                <svg
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#ffffff"
                                    width="55"
                                    height="55"
                                >
                                    <path
                                        d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                                        fillRule="nonzero"
                                        stroke="none"
                                    />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label
                                htmlFor="my-drawer-4"
                                aria-label="close sidebar"
                                className="drawer-overlay"
                            ></label>
                            <ul className="menu p-4 sm:w-96  w-72 min-h-full bg-[#1A1A1A]  *:sm:text-xl text-lg *:uppercase ">
                                {/* Sidebar content here */}
                                <li>
                                    <Link href="/pages/team/">Team</Link>
                                </li>
                                <li>
                                    <Link href="/pages/standings/">
                                        League Standings
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pages/news/">News</Link>
                                </li>

                                <li className="sm:hidden block">
                                    <Link href="#">Link 1</Link>
                                </li>
                                <li className="sm:hidden block">
                                    <Link href="#">Link 2</Link>
                                </li>

                                <li className="sm:hidden block">
                                    <Link href="#">Link 3</Link>
                                </li>

                                <li className="sm:hidden block">
                                    <Link href="#">Link 4</Link>
                                </li>

                                <li className="sm:hidden block">
                                    <Link href="#">Link 5</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
