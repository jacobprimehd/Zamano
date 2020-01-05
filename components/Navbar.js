import Link from 'next/link';
import React from "react";

export default function Navbar() {
    return (
        <div className="bg-gray-100 font-sans w-full m-0">
            <div className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                            <img src="/image/jacobprime.png" className="rounded-full h-16 w-16 bg-orange-200"/>
                            <Link href="/">
                                <a><span className="font-semibold text-4xl tracking-tight ml-6">Zamano</span></a>
                            </Link>

                        </div>

                        <div className="hidden sm:flex sm:items-center">
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
                            </Link>
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
                            </Link>
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
                            </Link>
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600">Recipe</a>
                            </Link>
                        </div>
                    </div>

                    <div className="block sm:hidden bg-white border-t-2 py-2 m-0">
                        <div className="flex flex-col">
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
                            </Link>
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
                            </Link>
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Recipe</a>
                            </Link>
                            <Link href="/recipes">
                                <a className="text-gray-800 text-sm font-semibold hover:text-purple-600">Recipe</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


