import React from 'react'

export default function FooterComponent() {
  return (
    <div>
        
        <footer className="border-t-[1px] border-yellow-200 bg-orange-50 mt-11 " >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-15 mx-9 py-8">
                  <div>
                    <h2 className="font-logoFont text-[1rem] font-semibold">Pokemons</h2>
                    <p className="text-gray-500 text-[0.9rem] mt-2 sm:w-[200px]">
                      We are a movie brand that offers the best of contemporary, ethnic trendy drama and action.
                    </p>
                  </div>
              
                  <div>
                    <h2 className="font-sectionfont text-[1.2rem]">Quick Links</h2>
                    <p className="text-gray-500 my-3">Horror</p>
                    <p className="text-gray-500 my-3">Fantacy</p>
                    <p className="text-gray-500 my-3">Action</p>
                    <p className="text-gray-500 my-3">Series</p>
                  </div>
              
                  <div>
                    <h2 className="font-sectionfont text-[1.2rem]">Blog</h2>
                    <p className="text-gray-500 my-3">About Us</p>
                    <p className="text-gray-500 my-3">Contact Us</p>
                    <p className="text-gray-500 my-3">Movies</p>
                    <p className="text-gray-500 my-3">Games</p>
                  </div>
              
                  <div>
                    <h2 className="font-sectionfont text-[1.2rem]">Policies</h2>
                    <p className="text-gray-500 my-3">Terms and Conditions</p>
                    <p className="text-gray-500 my-3">Privacy</p>
                    <p className="text-gray-500 my-3">Return</p>
                    <p className="text-gray-500 my-3">Watch Policy</p>
                  </div>
              
                  <div>
                    <h2 className="font-sectionfont text-[1.2rem] mt-6 sm:mt-0">My Account</h2>
                    <p className="text-gray-500 my-3">Login</p>
                    <p className="text-gray-500 my-3">Watch history</p>
                    <p className="text-gray-500 my-3">Wishlist</p>
                    
                  </div>
                </div>
              
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 p-2 justify-center items-center text-center text-white">
                  <p>&copy; pokemons 2025. All rights reserved</p>
                </div>
              </footer>
    </div>
  )
}
