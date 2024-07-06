import { PacificoFont, titleFont } from "@/config/fonts";
import { ProductsIndex } from "@/components/products";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="">
      <div className="w-12/12 mx-auto rounded-lg">
        <img src="/portada3.jpg" className="w-full shadow-lg object-cover h-[600px]" />

        <h1
          className={`${titleFont.className} text-shadow-title -mt-80 text-center text-7xl italic text-yellow-200 font-bold`}
        >
          El rincón del vino
        </h1>
        <div className="flex justify-center w-full">
          <Link
            href="/"
            className="mt-10 px-6 py-2 text-2xl font-bold bg-gray-900 opacity-40 text-white border-2 border-white rounded-md z-10 inline-block"
          >
            Tienda
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <ProductsIndex />
      </div>
    </main>
  );
}
