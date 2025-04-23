"use client"
import React from 'react'
import Link  from 'next/link';
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { useStoreFavorite } from '@/store/favorite.store';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export default function NavbarComponent() {
    const {selectedFavoriteIds} = useStoreFavorite()
    const favoriteSize =  selectedFavoriteIds.length

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-orange-500 text-white h-[60px] px-10 py-5 w-full font-bold fixed z-5">
      <h1 className="font-bold text-4xl">Pokemons</h1>
      <ul className="flex gap-5 relative">
        <Link href="/" className="cursor-pointer hover:bg-white hover:bg-opacity-10 py-1 px-3 rounded-md transition hover:text-black duration-300">Home</Link>
        <li className="cursor-pointer hover:bg-white hover:bg-opacity-10 py-1 px-3 rounded-md transition hover:text-black duration-300"><FaHeart size={25}/></li>
        <button className="rounded-3xl w-3 h-3 bg-red-500  text-[0.5rem] absolute right-58 bottom-2">{ favoriteSize}</button>

        <li className="cursor-pointer hover:bg-white hover:bg-opacity-10 py-1 px-3 rounded-md transition hover:text-black duration-300"><FaCartArrowDown size={25} /></li>
        <button className="rounded-3xl w-3 h-3 bg-red-500  text-[0.5rem] absolute right-40 bottom-2">{ favoriteSize}</button>

        <Link href="/contact" className="cursor-pointer hover:bg-white hover:bg-opacity-10 py-1 px-3 rounded-md transition hover:text-black duration-300">Contact</Link>
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        
      </ul>
    </div>
  )
}