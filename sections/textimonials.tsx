
function TestmonialCard() {
  return (
    <div className="bg-white rounded-sm p-4 m-4 h-full border-2 border-purple-500 aspect-[4/5] flex flex-col shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 hover:cursor-pointer">
      <div className='flex flex-col pt-2 justify-center items-center h-full'>
        <p className='font-spectral text-lg'><span className="text-amber-500 text-7xl">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum velit fuga impedit vel omnis enim beatae quae aliquid, sunt dolor quo numquam perspiciatis aut labore dignissimos, facilis fugiat eaque. <span >"</span></p>
        <p className='w-full text-center p-8 font-bold text-xl'>John doe</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="h-dvh  flex flex-col items-center border max-w-7xl mx-auto pt-40">
      <h2 className="text-7xl pb-20">Testimonials</h2>
      <div className="h-[50%] flex items-center justify-center p-4">

      <TestmonialCard/>
      <TestmonialCard/>
      <TestmonialCard/>
      </div>
    </div>
  );
}