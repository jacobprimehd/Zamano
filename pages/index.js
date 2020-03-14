import React from 'react'
import Head from 'next/head'
import '../styles/main.css'


const Home = () => (
    <body className="container mx-auto bg-red-200">
        <Head>
            <title>Zamano</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
        </Head>
        <div className="min-h-screen flex flex-col items-center justify-center mb-0">
            <img src="/image/jacobprime.png" className="rounded-full h-64 w-64 justify-center bg-orange-200 animated tada" />
            <h1 className="text-6xl animated tada">Coming Soon </h1>
        </div>
    </body>
)

export default Home
