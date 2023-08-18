'use client'

import Image from 'next/image'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import {FaDocker, FaGithub, FaLinkedin} from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useParams } from 'next/navigation'
import Modal from '../../components/modal'

export default function Home() {
  let [isOpen, setIsOpen] = useState(false)
  let [imgId, setImgId] = useState("")
  let { router } = useRouter();
  const param = useParams()

  useEffect(() => {
    console.log(router)
  }, [router])
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
       <div className='relative mx-auto mt-20 overflow-hidden bg-gradient-to-b from-cyan-400 to-slate-800 rounded-full w-80 h-80'>
       <Image
          layout='fill'
          objectFit='cover'
          src="/golden_smile_no_bg.png"
          alt="profile"
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
        <h4 className='text-2xl py-1'>Computer Vision / AI</h4>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-red-500 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/autopark.png"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Autonomous Parking Simulation
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    An algorithm for autonomous perpendicular parking. Implemented using ROS 2 for easier integration
                    with real-world applications, the algorithm utilizes computer vision techniques in conjucntion with AI to determine the location of an empty
                    parking space and the navigation required to safely park there.
                  </p>
                  <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-red-500 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/rescue.png"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Aerial Search and Rescue Simulation
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    An algorithm for autonomous perpendicular parking. Implemented using ROS 2 for easier integration
                    with real-world applications, the algorithm utilizes computer vision techniques in conjucntion with AI to determine the location of an empty
                    parking space and the navigation required to safely park there.
                  </p>
                  <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-red-500 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/next.svg"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Coin Classification
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    An algorithm for autonomous perpendicular parking. Implemented using ROS 2 for easier integration
                    with real-world applications, the algorithm utilizes computer vision techniques in conjucntion with AI to determine the location of an empty
                    parking space and the navigation required to safely park there.
                  </p>
                  <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <h4 className='text-2xl py-1'>Web development</h4>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-red-500 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/screenstash.png"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Screenstash
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    An algorithm for autonomous perpendicular parking. Implemented using ROS 2 for easier integration
                    with real-world applications, the algorithm utilizes computer vision techniques in conjucntion with AI to determine the location of an empty
                    parking space and the navigation required to safely park there.
                  </p>
                  <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-red-500 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/notesapp.png"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  What? ToDO!
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    An algorithm for autonomous perpendicular parking. Implemented using ROS 2 for easier integration
                    with real-world applications, the algorithm utilizes computer vision techniques in conjucntion with AI to determine the location of an empty
                    parking space and the navigation required to safely park there.
                  </p>
                  <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>


        <h4 className='text-2xl py-1'>Mobile Development</h4>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-red-500 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/petmergency.png"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Petmergency
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    An algorithm for autonomous perpendicular parking. Implemented using ROS 2 for easier integration
                    with real-world applications, the algorithm utilizes computer vision techniques in conjucntion with AI to determine the location of an empty
                    parking space and the navigation required to safely park there.
                  </p>
                  <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>


        <h4 className='text-2xl py-1'>Animation and Graphics</h4>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-red-500 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/blendshapes.png"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Animated SuperShapes
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    An algorithm for autonomous perpendicular parking. Implemented using ROS 2 for easier integration
                    with real-world applications, the algorithm utilizes computer vision techniques in conjucntion with AI to determine the location of an empty
                    parking space and the navigation required to safely park there.
                  </p>
                  <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-red-500 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        
          <button onClick={() =>{setIsOpen(true); setImgId("autopark")}} className='bg-red-600'>Click</button>
          <Modal isOpen={isOpen} imgId={imgId} onClose={() => setIsOpen(false)}/>
      </section>
    </main>
  )
}
