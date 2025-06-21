'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import ProgramsCarousel from './ProgramsCarousel'  

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
            className="rounded ml-4"
          />
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
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <p className="text-purple-800 text-3xl font-semibold text-center max-w-3xl mr-10 drop-shadow-[0_0_3px_#888] drop-shadow-[0_0_6px_#ccc]">
            Welcome to IAIR CAMPUS<br />
            where future innovators in Artificial Intelligence and Robotics are trained with both theoretical and practical experience.
          </p>
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

      {/* Diploma Certificates Section (Carousel) */}
      <ProgramsCarousel />

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
