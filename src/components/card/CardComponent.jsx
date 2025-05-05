"use client"
import React from 'react'
import Image from "next/image"
import { FaHeart } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link"
import { useStoreFavorite } from '@/store/favorite.store';



export default function CardComponent({id, image, name, type, hp, attack}) {
   const {selectedFavoriteIds ,toggleHeartIcon} = useStoreFavorite()
   let isSelected = selectedFavoriteIds.includes(id)
  return (
    <div>
      
      <div className="border-2 relative w-[400px] h-[560px] overflow-hidden border-gray-200  rounded-md">
                {/* image area */}
                <Link href={`/pokemons/${id}`} className="flex overflow-hidden justify-center items-center w-full bg-gray-300">
                <img  src={image} width="100%" height="100%"/>
                </Link>
                {/* content area */}
                <div className="mt-4 p-4">
               <h1 className="text-2xl font-bold ">{name}</h1>
               {isSelected? <FaHeart onClick = {() => toggleHeartIcon(id)} size={25} color="red" className="absolute top-2 left-2 cursor-pointer"/> : <FaHeart onClick = {() => toggleHeartIcon(id)} size={25} color="white" className="absolute top-2 left-2 cursor-pointer"/> }
                    
                    <div className="bg-orange-500 opacity-[0.5] text-white py-3 px-5 rounded-2xl flex items-center justify center absolute top-2 left-2">
                      <h3 className="font-bold ">{type}</h3>
                    </div>
                    <p className="text-gray-600  mt-2">This is a simple card component with.</p>
                    {isSelected?   <button onClick = {() => toggleHeartIcon(id)} className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-purple-400 transition duration-300">added</button> :
                     <button onClick = {() => toggleHeartIcon(id)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-blue-400 transition duration-300">add to card</button> }
                </div>
     </div>

     </div>
    
  )
}