import Link from "next/link";

const OffersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-prim-bone text-prim-grey">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Lo lamentamos, no hay ofertas disponibles por el momento.
      </h1>
      <p className="text-lg mb-8 text-center">
        ¡Pero no te preocupes! Puedes seguir explorando nuestra tienda y
        encontrar otros productos interesantes.
      </p>
      <Link href="/products">
        <button className="px-6 py-3 bg-prim-cober text-prim-bone rounded hover:bg-sec-brown">
          Ver Productos
        </button>
      </Link>
    </div>
  );
};

export default OffersPage;
