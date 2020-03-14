import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/main.css'


const Story = () => (
    <body className="mx-auto bg-white">

    <Head>
        <title>Zamano</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
    </Head>
    <div className="min-h-screen flex flex-col items-center justify-center mb-0">
        <h1 className="text-6xl underline">The Journey just started!</h1>
    </div>
    </body>
)

export default Story
