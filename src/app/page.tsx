'use server';

import React from 'react';
import { titleFont } from '@/config/fonts';
import { ProductsIndex } from '@/components/products';


// Definimos el componente Home
const Home: React.FC = () => {
  return (
    <main className="">
      <div className="w-12/12 mx-auto rounded-lg">
        <img
          src="/portada3.jpg"
          className="w-full shadow-lg object-cover h-[600px]"
          alt="Portada"
        />

        <h1
          className={`${titleFont.className} text-shadow-title -mt-80 text-center text-7xl italic text-yellow-200 font-bold`}
        >
          El rincón del vino
        </h1>
      </div>
      <div className="w-11/12 mx-auto">
        <ProductsIndex />
      </div>
     
    </main>
  );
}

export default Home;
