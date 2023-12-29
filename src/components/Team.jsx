import { CardDefault } from "./Cards"
import { HorizontalCard } from "./Cards"

function Team () {
    return (
        <section className='w-full py-12 lg:px-12'>
            <div className='container px-6 flex flex-col mx-auto'>
                <h1 className="lg:text-4xl text-2xl text-yellow-100 font-redhat">Curious to know who we are? We're TABA, your premier destination for transformative painting solutions.</h1>
                <div className='flex gap-8 my-12 flex-wrap'>
                <CardDefault ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>} infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'} />
                <CardDefault ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>} infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'} />
                </div>
                <div className="w-full">
                    <HorizontalCard />
                </div>
            </div>
        </section>
    )
}

export default Team