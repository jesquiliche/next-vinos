import { PacificoFont, titleFont } from "@/config/fonts";

export default async function Home() {
  
  return (
    <main className="">
      <div className="py-20 w-11/12 mx-auto rounded-lg">
       
          <img src="/portada.jpg" className="w-full h-auto rounded-xl object-cover"/>
         
        
        <h1 className={`${PacificoFont.className} text-shadow-title -mt-60 text-center text-7xl italic text-yellow-400 font-bold`}>El rincón del vino</h1>
      </div>
    </main>
  );
}
