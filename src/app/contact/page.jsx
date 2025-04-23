  "use client"
import React, { useRef } from 'react';
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from "@/utils/constants";
import emailjs from '@emailjs/browser';

 
const page = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // <-- New state

  const handleSendEmail = () => {
    setIsSending(true); // disable button
    emailjs
      .sendForm('service_871cdyu', 'template_jzfmvgl', form.current, {
        publicKey: 'RVasm8Ba_zQusxZxB',
      })
      .then(
        () => {
          toast.success('Email sent successfully!', toastConfig);
        },
        (error) => {
          toast.error('Oops! Something went wrong.', toastConfig);
        }
      )
      .finally(() => {
        setIsSending(false); // re-enable button
      });
  };
  
  

  return (
    <>
    <NavbarComponent/>
    <ToastContainer />

    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-blue-100 flex  items-center justify-center p-6">
      <div className="bg-white/90 mt-11 backdrop-blur-md shadow-2xl rounded-2xl p-10 max-w-4xl w-full transition-all duration-300">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">We'd love to hear from you, Trainer!</p>

     

        <div className="grid md:grid-cols-2 gap-8">
          <form ref={form}  className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input type="text" name="name" value={form.name}  placeholder="Wisely Cute" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition "
              />
         
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input type="email" name="email" value={form.email}  placeholder="wiselycute@gmail.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition "
              />
              
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea name="message" rows="4" value={form.message} placeholder="I need help finding Pikachu!" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition"
              />
            
            </div>
            <button
                     onClick={handleSendEmail}
                     type="button"
                     disabled={isSending} // <-- disable button
                     className={`bg-orange-400 hover:bg-orange-600 active:scale-95 transition text-white font-bold py-2 px-6 rounded-lg shadow-lg ${
                     isSending ? 'opacity-50 cursor-not-allowed' : ''}`}>
                     {isSending ? 'Sending...' : 'Send Message'}
                   </button>
          </form>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <span className="text-gray-700">Pallet Town, Kanto Region</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <span className="text-gray-700">+1 (800) POKE-NOW</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <span className="text-gray-700">contact@pokemonworld.com</span>
            </div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              alt="Pikachu"
              className="w-50 h-50 hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default page;