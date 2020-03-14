import React from 'react'
import Head from 'next/head'
import PageContainer from '../components/PageContainer'
import '../styles/main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




class Story extends React.Component {
    componentDidMount() {
        AOS.init({
            // initialise with other settings
            duration : 2000
        });
    }
  
    render() {
      return (
        <body className="container mx-auto bg-white">

        <Head>
            <title>Zamano</title>
        </Head>
        <PageContainer>
        </PageContainer>
        </body>
      )
    }
  }

export default Story

