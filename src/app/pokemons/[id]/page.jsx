import React from 'react' 
import { Pokemons } from "@/utils/data";
import NavbarComponent from '@/components/navbar/NavbarComponent';
import { Types } from "@/utils/data";


const page = async ({params}) => {
    const {id} = await params;
    const  pokedata = Pokemons.find(item => item.id == id)
    return(

        <>
        <NavbarComponent/>
        <div className='flex justify-center items-center h-screen relative'>
            <img src={pokedata.image} width="300px" height="300px" />
            <h1 className="text-[70px]">{pokedata.name}</h1>
            <div className="bg-orange-500 opacity-[0.5] text-white py-3 px-5 rounded-2xl flex items-center justify center absolute top-24 left-86">
                      <h3 className="font-bold ">{pokedata.type}</h3>
                    </div>
           
        </div>

        </>
    )
}



   export default page;