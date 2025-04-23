"use client"
import Image from "next/image"
import { FaHeart } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link"
import NavbarComponent from "@/components/navbar/NavbarComponent";
import CardComponent from "@/components/card/CardComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import { Pokemons } from "@/utils/data";
import {useState} from "react";
import { Types } from "@/utils/data";

const Page = () => {
   console.log(Pokemons)
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedType, setSelectedType] = useState(null);
    let searchResult = searchTerm.length > 0 ? Pokemons.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : Pokemons
    let filteredResult = selectedType ? searchResult.filter(item => item.type.toLowerCase()===selectedType.toLowerCase()) : searchResult;
    searchResult = filteredResult;
   

  
    
    return (
           <>
             <NavbarComponent/>

             
             <div className="flex justify-between items-center pt-5 mb-[-20px] px-10 pt-20 ">
             <input value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} type="search" placeholder="search for a pokemon" className="m-5 bg-gray-200 py-3 px-5 w-[400px] rounded-full outine-none "/>
             <div className='flex gap-4 '> 
             <button onClick={() => setSelectedType(null)} className='bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-2xl'>All</button>
             {Types.map((item,index) => 
             
            <button key={index} onClick={() => setSelectedType(item.name)} className='bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-2xl'> {item.name}  </button>)}
           
         
        </div>
        </div> 
        
             
        
             <div className="grid grid-cols-2 my-11  px-8 ">

                <div>
                    <h2 className="text-2xl font-bold">
                        Discover top cards from scarlet & violet-journey together
                    </h2>
                    <p className="w-[400px]">
                        Pokemons TCG Reginal champion xander pero shares which cards from the 
                        latest explansion are bound to make an impact.
                    </p>
                    <div className="flex gap-6">
                    <img className="w-[180px] h-[100px] object-cover" src="/img4.jpg"  />              
                    <img className="w-[180px] h-[100px] object-cover" src="/img5.jpg"  />              
                    <img className="w-[180px] h-[100px] object-cover" src="/img6.jpg"  /> 
                

                    </div>

                    </div>

                <div className="flex gap-6">
               <img className="w-[250px] h-[250px] object-cover" src="/img1.jpg" />
               <img className="w-[250px] h-[250px] object-cover" src="/img3.jpg" />
               <img className="w-[250px] h-[250px] object-cover" src="/img2.jpg" />

                </div>

             </div>
          
        <div className="flex  justify-center gap-5 items-center h-screen flex-wrap ">
            {searchResult.map((item,index) => <CardComponent id={item.id} name={item.name} type={item.type} image={item.image} key={index}/>)}
             
       






        <FooterComponent/>

   
        </div>
        </>

    )
}

export default Page;