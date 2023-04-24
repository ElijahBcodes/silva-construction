
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-row lg:flex-row-reverse">
    <img src="/image.jpg" className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Silva Construction</h1>
      <p className="py-6">Find out why we are the best company for your home improvement needs.</p>
      <button className="btn btn-primary">Info</button>
    </div>
  </div>
</div>
<div className="hero min-h-screen" style={{ backgroundImage: "/image.jpg"}}>
  <div className="hero-overlay bg-opacity-1000"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>
  )
}
