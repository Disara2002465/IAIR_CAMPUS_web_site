'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-blue-950 min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="relative bg-blue-950 text-white p-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image 
  src="/logo.png" 
  alt="Logo"  
  width={100}  
  height={100}  
  className="rounded ml-4" ></Image>
        </div>

        {/* Center: Navigation links */}
        <ul className="flex space-x-10 absolute left-1/2 -translate-x-1/2">
          <li><Link href="/" className="text-white text-lg hover:text-yellow-400">Home</Link></li>
          <li><Link href="/programs" className="text-white text-lg hover:text-yellow-400">Programs</Link></li>
          <li><Link href="/about" className="text-white text-lg hover:text-yellow-400">About Us</Link></li>
          <li><Link href="/contact" className="text-white text-lg hover:text-yellow-400">Contact Us</Link></li>
        </ul>

        {/* Right: Registration button */}
        <Link href="/login" className="bg-yellow-400 text-blue-900 font-semibold px-5 py-3 rounded hover:bg-yellow-500 transition">
          Registration Online
        </Link>
      </nav>

      {/* Hero Image */}
      <div className="relative w-screen h-[500px]">
        <Image src="/777.jpg" alt="Banner" fill className="object-cover" />
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center ">
          <h1 className="text-black text-4xl font-bold text-center px-4">Welcome to the Future of AI & Robotics</h1>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex items-center mb-4">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">VISION</div>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            We see a future where intelligent systems are seamlessly integrated into everyday life, enhancing human capabilities and improving societal well-being.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex items-center mb-4">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">MISSION</div>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our mission is to cultivate innovation in AI and robotics, preparing the upcoming leaders with the expertise and tools needed to revolutionize the world.
          </p>
        </div>
      </div>

      {/* Diploma Certificates Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Explore Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { src: '/ai.jpg', title: 'Certificate in AI' },
            { src: '/r.png', title: 'Certificate in Robotics' },
            { src: '/pr.jpg', title: 'Project Management with AI' },
            { src: '/j.jpg', title: 'Certificate in Java' },
            { src: '/p.jpg', title: 'Certificate in Python' },
          ].map((program, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden relative">
              <Image src={program.src} alt={program.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 text-center">
                <h3 className="text-white text-sm font-semibold">{program.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b bg-black text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between p-8">
          <div className="min-w-[250px] mb-6">
            <Image src="/logo.png" alt="Zahara Gems Logo" width={250} height={100} className="mb-4 ml-4" />
          </div>
          <div className="min-w-[180px] mb-6">
            <h3 className="font-semibold text-lg mb-4">Easy Navigation</h3>
            <Link href="/" className="block hover:text-yellow-400 mb-2">Home</Link>
            <Link href="/about" className="block hover:text-yellow-400 mb-2">About</Link>
            <Link href="/contact" className="block hover:text-yellow-400 mb-2">Contact Us</Link>
            <Link href="/gallery" className="block hover:text-yellow-400 mb-2">Gallery</Link>
          </div>
          <div className="min-w-[180px] mb-6">
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <Link href="#" className="block hover:text-yellow-400 mb-2">Terms & Conditions</Link>
            <Link href="#" className="block hover:text-yellow-400 mb-2">Privacy Policies</Link>
            <Link href="#" className="block hover:text-yellow-400 mb-2">Other Policies</Link>
          </div>
          <div className="min-w-[180px] mb-6">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p>Ra De Mel Mawatha, Colombo 03</p>
            <p className="mt-2">+94-778694800</p>
            <p>www.iaircampus.com</p>
            <p>info@iaircampus.com</p>
          </div>
        </div>

        <div className="border-t border-yellow-400 flex justify-center gap-8 py-5">
          <Link href="#" className="text-orange-400 border-2 border-orange-400 p-3 rounded-full text-xl hover:bg-orange-500 hover:text-white transition"><FaFacebookF /></Link>
          <Link href="#" className="text-orange-400 border-2 border-orange-400 p-3 rounded-full text-xl hover:bg-orange-500 hover:text-white transition"><FaInstagram /></Link>
          <Link href="#" className="text-orange-400 border-2 border-orange-400 p-3 rounded-full text-xl hover:bg-orange-500 hover:text-white transition"><FaLinkedinIn /></Link>
          <Link href="#" className="text-orange-400 border-2 border-orange-400 p-3 rounded-full text-xl hover:bg-orange-500 hover:text-white transition"><FaTiktok /></Link>
        </div>

        <div className="bg-yellow-400 text-[#0e2b56] text-center py-3 font-medium">
          © 2025 AI Robotics Hub. All rights reserved.
        </div>
      </footer>

    </div>
  )
}
