import Story1 from './Story'
import Pictures from './Picture'
import Link from 'next/link'

export default function HomePageContainer(){
    return(

        <div className="container mx-auto bg-white">
        <div className="flex content-center">
        <h1 className="mx-auto text-5xl text-black bg-white border-b" data-aos="zoom-in">Happy Birthday!</h1>
        </div>       
        <br/>
        <div className="bg-white flex flex-col items-center ">
        <Story1></Story1>  
        <Pictures></Pictures>
        </div>
        </div>
    )
}
