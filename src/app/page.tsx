import { getAllDenominaciones } from "@/actions/denominacines-actions";
import { getAllProducts } from "@/actions/productos-actions";
import { getAllTipos } from "@/actions/tpos-action";


export default async function Home() {
  const tipos=await getAllTipos();
  console.log(tipos);
  const productos=await getAllProducts();
  console.log(productos);
  const denominaciones=await getAllDenominaciones();
  console.log(denominaciones);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Home</h1>
    </main>
  );
}
