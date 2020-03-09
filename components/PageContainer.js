import Story1 from './StoryContainer'
import Story2 from './StoryContainer2'
import Link from 'next/link'

export default function HomePageContainer(){
    return(
        <div className="container mx-auto bg-white">
        <div className="flex content-center">
        <h1 className="mx-auto text-5xl text-black bg-white line-through">The Journal</h1>
        </div>       
        <br/>
        <div className="bg-white flex flex-col items-center object-center">
        <Story1></Story1>  
        <Story2></Story2>
        <Link href='/journey'>
        <a><h1>Sorry the Journal has Ended, But Click here to see the journey!</h1></a>
        </Link>
        </div>
        </div>
    )
}
