import React from 'react' 
import { Pokemons } from "@/utils/data";
import NavbarComponent from '@/components/navbar/NavbarComponent';
import { Types } from "@/utils/data";


export async function generateMetadata({ params }) {
    const { id } = params;
    const pokedata = Pokemons.find(item => item.id == id);
  
    if (!pokedata) {
      return {
        title: "Pokémon Not Found",
      };
    }
  
    return {
      title: `${pokedata.name} - Pokémon Explorer`,
      description: `Discover information about ${pokedata.name}, including stats, types, and more.`,
      icons: {
        icon: pokedata.image,
        apple: pokedata.image,
        shortcut: pokedata.image,
      },
      openGraph: {
        title: `${pokedata.name} - Pokémon Explorer`,
        description: `Explore detailed information about ${pokedata.name} in our modern Pokédex.`,
        url: https://yourdomain.com/pokemon/${id},
        siteName: "Pokémon Explorer",
        images: [
          {
            url: pokedata.image,
            width: 1200,
            height: 630,
            alt: `${pokedata.name} Pokémon`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${pokedata.name} - Pokémon Explorer`,
        description: `Explore ${pokedata.name} on Pokémon Explorer powered by PokéAPI.`,
        images: [pokedata.image],
      },
    };
  }

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