import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/main.css'


const Story = () => (
    <body className="mx-auto bg-red-200">

    <Head>
        <title>Zamano</title>
    </Head>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center mb-0">
        <img src="/image/jacobprime.png" className="rounded-full h-64 w-64 justify-center bg-orange-200"/>
        <h1 className="text-6xl">Hello</h1>
    </div>
    </body>
)

export default Story
