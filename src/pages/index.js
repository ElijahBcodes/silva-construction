import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className=" min-h-screen bg-white">
  <div className="hero-content flex-row lg:flex-row-reverse">
    <img src="/image.jpg" className=" " />
   
  </div>
</div>
<div className="hero min-h-screen" style={{ backgroundImage: "/image.jpg"}}>
  <div className="hero-overlay bg-opacity-1000"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>
  )
}
