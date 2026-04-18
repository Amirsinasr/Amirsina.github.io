import Image from "image0.jpeg";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#1e2228] overflow-hidden px-8">
      
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#2a2e35] -z-0"></div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col-reverse items-center justify-between md:flex-row">
        
        <div className="mt-10 flex w-full flex-col justify-center text-left md:mt-0 md:w-1/2">
          <p className="mb-2 text-2xl text-gray-300 font-light">I'm</p>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Sina Sahraei
          </h1>
          
          <div className="my-6 h-1 w-24 bg-yellow-500"></div>
          
          <p className="max-w-md text-lg leading-relaxed text-gray-400">
            A software engineering student at Politecnico di Torino providing 
            services for digital programming and design content needs.
          </p>
        </div>

        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <image 
            src="/profile.png" 
            alt="Sina Sahraei Profile" 
            width={500} 
            height={600}
            className="drop-shadow-2xl" // Adds a nice shadow behind your cutout
            priority
          />
        </div>

        <div > 
          <h1 className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-500"> This is the footer </h1>
        </div>

      </div>

    </main>
    
  );
}
