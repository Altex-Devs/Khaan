"use client";
import { auth } from '@/firebase/firebase';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import './style.css';
const AdminNav = () => {
    const router = useRouter();
    let dropDownVal;
    const [dropdowns, setDropdowns] = useState([
        {
            title: 'Иргэд',
            url: '/admin/retail'
        },
        {
            title: 'Байгууллага',
            url: '/admin/company'
        }
    ]);

    const toggleDropdown = (index: any) => {
        const updatedDropdowns = dropdowns.map((dropdown, i) => ({
            ...dropdown,
            //   isOpen: index === i ? !dropdown.isOpen : false // Toggle clicked dropdown, close others
        }));
        dropDownVal = index;
        setDropdowns(updatedDropdowns);
    };

    const logout = () => {
        auth.signOut().then(() => {
            router.push("/auth");
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <Box display="flex">
            <Box flex={1} className="box">
                {/* <div className="h-full fixed">
                    <ul className="bg-purple-200 w-full p-5 h-4/5 leading-10">
                        <li className="w-full mb-20 flex justify-center">
                            <a href="/admin">
                                <MainLogo />
                            </a>
                        </li>
                        {dropdowns.map((dropdown, index) => (
                            <li key={index} className="group flex">
                                <a
                                    href={dropdown.url}
                                    className="col-span-1 text-[#66377B] hover:underline cursor-pointer fontSomething font-bold"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    {dropdown.title}
                                </a>
                            </li>
                        ))}
                        <li>
                        </li>
                    </ul>
                    <div className="text-black absolute h-1/5 bg-[#fff] w-full">
                        <div className="w-full h-full bg-purple-400 border">
                            <div className="flex items-center mt-4">
                                <div className="relative flex flex-col items-center w-full">
                                    <div
                                        className="mt-4 rounded-full flex items-end justify-end bg-[#fff]">
                                        <UserIcon />
                                        <div className="absolute"></div>
                                    </div>
                                    <div className="flex flex-col space-y-1 justify-center items-center w-full">
                                        <div className="mt-2 text-gray-200 z-10 rounded shadow-lg">
                                            <button
                                                className="hover:bg-purple-500 hover:text-white rounded-md block px-2 py-1 text-xs font-bold"
                                                onClick={logout}
                                            >
                                                Гарах
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="md:flex">
                    <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                        <li>
                            <a href="#" className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                                <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" /></svg>
                                Dashboard
                            </a>
                        </li>
                    </ul>
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
                        <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                </div>



            </Box>
            {/* <Box flex={5} p={4} className="w-full box1">
                <MainRetail />
            </Box> */}
        </Box>
    )
}

export default AdminNav