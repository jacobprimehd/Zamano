import React from 'react'
import Head from 'next/head'
import '../styles/main.css'


const Home = () => (
    <body className="container mx-auto bg-red-200">
        <Head>
            <title>Zamano</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center">
            <img src="/image/jacobprime.png" className="rounded-full h-64 w-64 flex items-center justify-center bg-orange-200"/>
            <h1 className=" ml-6 text-4xl">Coming Soon </h1>
        </div>
    </body>
)

export default Home
