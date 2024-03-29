import Story1 from './StoryContainer'
import Story2 from './StoryContainer2'
import Story3 from './StoryContainer3'
import Story4 from './StoryContainer4'
import Picture from './PictureContainer'
import Link from 'next/link'

export default function HomePageContainer(){
    return(

        <div className="container mx-auto bg-white">
        <div className="flex content-center">
        <h1 className="mx-auto text-5xl text-black bg-white border-b" data-aos="zoom-in">The Journal</h1>
        </div>       
        <br/>
        <div className="bg-white flex flex-col items-center object-center">
        <Story1></Story1>  
        <Story2></Story2>
        <Story3></Story3>
        <Story4></Story4>
        <Picture></Picture>
        </div>
        </div>
    )
}
