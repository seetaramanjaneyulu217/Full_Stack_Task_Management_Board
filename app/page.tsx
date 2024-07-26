'use client'
import { Barlow, Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const barlow = Barlow({
  weight: '600',
  subsets: ['latin'],
})

const inter = Inter({
  weight: '400',
  subsets: ['latin']
})

type Page = 'login' | 'signup'

export default function Home() {
  const [page, setPage] = useState<Page>('signup')
  return (
    <div className="bg-gradient-to-t from-[#9C93D4] to-white h-screen">
      <div className="flex flex-col justify-center mt-24 border-2 p-14 rounded-2xl w-[648px] max-h-[556px] mx-auto bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0]">
        <h1 className={`${barlow.className} text-5xl text-center mb-8`}>Welcome to <span className="text-[#4534AC]">Workflo!</span></h1>
        <form className="flex flex-col w-[528px] gap-y-4 mb-4">
          {page === 'signup' && <input type="text" placeholder="Full name" className="bg-[#EBEBEB] rounded-lg px-3 py-4 outline-none" />}
          <input type="email" placeholder="Your email" className="bg-[#EBEBEB] rounded-lg px-3 py-4 outline-none" />
          <input type="password" placeholder="Password" className="bg-[#EBEBEB] rounded-lg px-3 py-4 outline-none" />
          <button className={`max-w-[528px] h-12 border-2 rounded-lg p-2 ${inter.className} text-xl bg-gradient-to-t from-[#7a6ec3] from-100% to-white text-white`}>{page === 'signup' ? 'Sign up' : 'Login'}</button>
        </form>
        <div className={`flex justify-center items-center gap-x-1 ${inter.className} text-xl`}>
          <p className="text-[#606060]">{ page === 'signup' ? <p>Already have an account?</p> : <p>Don't have an account?</p> }</p>
          <p>{page === 'signup' ? <p onClick={() => setPage('login')} className="text-[#0054A1] cursor-pointer">Log in</p> : <p>Create a <span onClick={() => setPage('signup')} className="text-[#0054A1] cursor-pointer">new account</span></p>}</p>
        </div>
      </div>
    </div>
  );
}
