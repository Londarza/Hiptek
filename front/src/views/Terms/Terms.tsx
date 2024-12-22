const Terms: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white  shadow-lg rounded-lg max-w-4xl w-3/4 mx-4 text-justify p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Términos y Condiciones
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
          <p>
            Bienvenido a HipTek. Estos términos y condiciones describen las
            reglas y regulaciones para el uso del sitio web de HipTek.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Uso del Sitio</h2>
          <p>
            Al acceder a este sitio, aceptas estar sujeto a estos términos de
            servicio, a todas las leyes y regulaciones aplicables, y aceptas que
            eres responsable de cumplir con cualquier ley local aplicable.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            3. Propiedad Intelectual
          </h2>
          <p>
            El contenido de este sitio, incluidos textos, gráficos, imágenes y
            otros materiales, están protegidos por derechos de autor y otras
            leyes de propiedad intelectual.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            4. Limitación de Responsabilidad
          </h2>
          <p>
            En ningún caso HipTek será responsable por cualquier daño
            (incluyendo, sin limitación, daños por pérdida de datos o
            beneficios) que surja del uso o la imposibilidad de usar los
            materiales en este sitio.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            5. Cambios a los Términos
          </h2>
          <p>
            Nos reservamos el derecho de modificar o reemplazar estos términos
            en cualquier momento. Es tu responsabilidad revisar estos términos
            periódicamente para estar al tanto de cualquier cambio.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre estos términos, puedes contactarnos
            en
            <a
              href="mailto:support@hiptek.com"
              className="text-green-600 underline"
            >
              {" "}
              support@hiptek.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
