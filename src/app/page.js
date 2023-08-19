'use client'

import Image from 'next/image'
import {HiMail} from 'react-icons/hi'
import {FaDocker, FaGithub, FaLinkedin} from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard'

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [clipState, setClipState] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setClipState(false);
  };
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
          <div className='flex items-center'>
              <Button
                id="demo-but"
                aria-controls={open ? 'demo-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className='flex bg-gradient-to-r from-blue-500 to-cyan-300 text-white px-4 py-2 rounded' 
                onClick={handleClick}>
                Contact <HiMail className='ml-1 text-lg'/>
              </Button>
              <CopyToClipboard text='andrew.j.owens1@gmail.com' onCopy={() => setClipState(true)}>
              <Menu
                id="demo-menu"
                aria-labelledby="demo-but"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>andrew.j.owens1@gmail.com</MenuItem>
              </Menu>
              </CopyToClipboard>
          </div>
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
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-slate-300 md:w-20 md:h-20 justify-center'>
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
                  <div className='space-x-2'>
                    <a href='https://hub.docker.com/r/owens518/ros2-desktop-vnc' className='text-blue-600 hover:text-blue-300'>Project Repo</a>
                    <a href='https://www.youtube.com/watch?v=81Cyr8qw-Uc' className='text-blue-600 hover:text-blue-300'>Video</a>
                  </div>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-900 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>ROS 2 Foxy</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Gazebo</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>TensorFlow</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Python</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-slate-300 md:w-20 md:h-20 justify-center'>
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
                    A simulation of a fully autonomous search and rescue aerial drone. Implemented using three.js to simulate a 3D the environment within
                    a web browser. The aerial drone utilizes computer vision techniques to determine the location of the target
                    and the path needed for evacuation.
                  </p>
                </div>
                <div className=''>
                  <a href='https://hub.docker.com/r/owens518/iteration3' className='text-blue-600 hover:text-blue-300'>Project Repo</a>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>JavaScript</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Three.js</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>C++</li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-slate-300 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/coin.svg"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Coin Classification
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    A ML model to recognize and classify the quality of a coin within an image.
                  </p>
                  <a href='https://github.com/TheAndrew-O/Coin-Detector' className='text-blue-600 hover:text-blue-300'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Python</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>OpenCV</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Tensorflow</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Google Colab</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <h4 className='text-2xl py-1'>Web development</h4>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 md:w-20 md:h-20 justify-center border-black border-2'>
                  <Image
                    width={100}
                    height={100}
                    src="/film.svg"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Screenstash
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                  Screen Stash is a user-friendly website that allows you to create a personalized list of movies and TV shows that you want to watch. 
                  Not only that, it also helps you find out where you can watch them on various streaming services, all in one place.
                  </p>
                  <a href='https://screenstash.netlify.app/' className='text-blue-600 hover:text-blue-300'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>TypeScript</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Codehooks (NoSQL)</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Clerk</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Next.js</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 md:w-20 md:h-20 justify-center border-black border-2'>
                  <Image
                    width={100}
                    height={100}
                    src="/astronaut-svgrepo-com.svg"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  What? ToDO!
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                  What?ToDo! is the perfect tool for anyone who needs to keep track of their tasks. 
                  Its simple and easy-to-use interface gives you a visual representation of your to-do list, so you can focus on what&apos;s important.
                  </p>
                  <a href='https://ohwhattodo.netlify.app/' className='text-blue-600 hover:text-blue-300'>Link</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>TypeScript</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>NoSQL</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>NextAuth</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Next.js</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>


        <h4 className='text-2xl py-1'>Mobile Development</h4>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 md:w-20 md:h-20 justify-center border-black border-2'>
                  <Image
                    width={100}
                    height={100}
                    src="/pet.svg"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Petmergency
                </div>
                <div>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                  Petmergency is a mobile app that aims to provide critical first aid information for pets in a concise and convenient manner. 
                  The application also aims to provide a service that enables you to manage your pet&apos;s health on the same device where you manage yours, thus making it just a little bit easier to take care of your dog. 
                  The target users for this application are dog owners who want to stay informed and keep track of their pet&apos;s health.
                  </p>
                  <a href='https://github.com/TheAndrew-O/Petmergency' className='text-blue-600 hover:text-blue-300'>Project Repo</a>
                </div>
                <div className=''>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Android Studio</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Java</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Kotlin</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>SQLite</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>


        <h4 className='text-2xl py-1'>Animation and Graphics</h4>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/4 flex-1 bg-slate-100 rounded-xl">
              <div className='flex flex-col lg:flex-row lg:flex-wrap p-2'>
                <div className='flex rounded-full overflow-hidden w-12 h-12 bg-slate-300 md:w-20 md:h-20 justify-center'>
                  <Image
                    width={100}
                    height={100}
                    src="/blendshapes.png"
                  />
                </div>
                <div className='text-black my-auto ml-2 text-xl font-medium'>
                  Animated SuperShapes
                </div>
                </div>
                <div className='ml-2'>
                  <p className='text-md text-black p-2 mx-auto md:text-lg'>
                    A demonstration of linear interpolation and the blendshapes animation technique utilizing super shapes.
                  </p>
                  
                </div>
                <div className='ml-2 space-x-2'>
                  <a href='https://github.com/TheAndrew-O/BlendShapes' className='text-blue-600 hover:text-blue-300'>Project Repo</a>
                  <a href='https://www.youtube.com/watch?v=cYRFqcOyeJw&t=84s' className='text-blue-600 hover:text-blue-300'>Video</a>
                </div>
                <div className='ml-2 mb-1'>
                  <p className='text-black'>What I used:</p>
                  <ul className='text-gray-600 ml-4 flex flex-wrap space-x-1 md:space-x-3'>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Java</li>
                    <li className='bg-slate-300 rounded-full px-2 mb-1'>Processing</li>
                  </ul>
                </div>
              
            </div>
        </div>
      </section>
    </main>
  )
}
