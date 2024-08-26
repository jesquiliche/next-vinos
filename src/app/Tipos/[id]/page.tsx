import { getDenominacionById } from "@/actions/denominacines-actions";

import {titleFont } from "@/config/fonts";
import { ProductsByDOP } from "@/components/products/productByDOP";

interface Props {
  params: {
    id: string;
  };
}

export default async function Home({ params }: Props) {
  const id = +params.id;
  console.log(id);
  //const product = await getProductDetailsById(id);
  const tipo = await getDenominacionById(+id);

  return (
    <div className="w-10/12 mx-auto py-20">
      <div className="flex justify-center">
        <img
          src="/logo.png"
          className="h-40 w-40 border border-gray-500 rounded-full shadow-xl "
          alt="logo"
        />
      </div>
      <h1 className={`py-5 text-shadow-title text-4xl font-bold text-center`}>
        D.O.P {tipo?.nombre}
      </h1>
      <h2 className="py-5 text-lg text-center">{tipo?.descripcion}</h2>
      <ProductsByDOP id={id}/>
    </div>
  );
}
