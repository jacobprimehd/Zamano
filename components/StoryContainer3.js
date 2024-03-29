export default function HomePageContainer(){
    return(
        <div className="max-w-md w-full lg:flex" data-aos="fade-up">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
        </div>
        <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-black font-bold text-xl mb-2 border-b">Extra</div>
            <p className="text-grey-darker text-base font-mono italic">Cuando mires las estrellas, acuerdate de mi. en cada una de ellas hay un beso para ti.</p>
            <br/>
            <p className="text-grey-darker text-base font-mono">Translated</p>
            <br/>
            <p className="text-grey-darker text-base font-mono italic">When you see the stars, remember me. In each single star there is a kiss for you</p>
            <br/>
            <p className="text-grey-darker text-base font-mono"></p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-black leading-none">Sincerely,</p>
              <p className="text-black leading-none">Jacob Zamano</p>
            </div>
          </div>
        </div>
      </div>
    )
}