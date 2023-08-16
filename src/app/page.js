import Image from 'next/image'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import {FaDocker, FaGithub, FaLinkedin} from 'react-icons/fa6'


export default function Home() {
  return (
    <main className='bg-slate-800 px-10 md:px-20 lg:px-40'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-i'>
            Developed by &nbsp;
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-blue-500 to-cyan-300 relative inline-block">
                <span className="relative text-white">Andrew</span>
              </span>
          </h1>
          <ul className='flex items-center'>
            <li>
              <a className='flex bg-gradient-to-r from-blue-500 to-cyan-300 text-white px-4 py-2 rounded' href='https://www.linkedin.com/in/andrewjowens1/'>Resume <BsFillFileEarmarkPdfFill className='mt-1 ml-1'/>
              </a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='md:text-6xl text-5xl py-2 text-cyan-400 font-light'>
            Andrew Owens
          </h2>
          <h3 className='md:text-3xl text-2xl py-2'>Designer and Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-100 md:text-lg max-w-xl mx-auto'>
            Gradutate Student pursuing my Master&apos;s degree in Computer Science.
            I have a passion for software development and computer vision. Take a look
            down below to see some of the work I&apos;ve done.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3'>
          <a href='https://hub.docker.com/u/owens518'><FaDocker/></a>
          <a href='https://github.com/TheAndrew-O'><FaGithub/></a>
          <a href='https://www.linkedin.com/in/andrewjowens1/'><FaLinkedin/></a>
        </div>
       <div>
       <Image
          className="relative mx-auto rounded-full mt-20 overflow-hidden"
          src="/golden_smile.jpg"
          alt="profile"
          width={180}
          height={180}
          priority
        />
       </div>
      </section>
      <section>
        <div>
          <h3 className='text-center text-3xl py-1'>Frameworks and languages I work with.</h3>
        </div>
        <div className='lg:flex gap-10 justify-center'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-slate-100 flex-1'>
            <Image className='mx-auto' src="/react-svgrepo-com.svg" width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800'>Web and Mobile development</h3>
            <h4 className='py-4 text-gray-800'>Tools I use</h4>
            <p className='text-gray-800 py-1'>React</p>
            <p className='text-gray-800 py-1'>Angular</p>
            <p className='text-gray-800 py-1'>SQL</p>
            <p className='text-gray-800 py-1'>NoSQL</p>
            <p className='text-gray-800 py-1'>Android Studio</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-slate-100 flex-1'>
            <Image className='mx-auto' src="/vs-code-svgrepo-com.svg" width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800'>Languages</h3>
            <h4 className='py-4 text-gray-800'>Programming languages I use</h4>
            <p className='text-gray-800 py-1'>C/C++</p>
            <p className='text-gray-800 py-1'>Python</p>
            <p className='text-gray-800 py-1'>Java</p>
            <p className='text-gray-800 py-1'>JavaScript</p>
            <p className='text-gray-800 py-1'>Ocaml</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-slate-100 flex-1'>
            <Image className='mx-auto' src="/tensorflow-svgrepo-com.svg" width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800'>Computer Vision and AI</h3>
            <h4 className='py-4 text-gray-800'>Tools I use</h4>
            <p className='text-gray-800 py-1'>PyTorch</p>
            <p className='text-gray-800 py-1'>TensorFlow</p>
            <p className='text-gray-800 py-1'>OpenCV</p>
            <p className='text-gray-800 py-1'>Google Colab</p>
            <p className='text-gray-800 py-1'>Nvidia CUDA/cuML</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className='text-3xl py-1'>Projects</h3>
        
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src="/autopark.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src="/rescue.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src="/screenstash.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src="/notesapp.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src="/petmergency.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src="/blendshapes.png"
              />
            </div>
          </div>
      </section>
    </main>
  )
}
