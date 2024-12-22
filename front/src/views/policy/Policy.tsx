const Policy: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white  shadow-lg rounded-lg max-w-4xl w-3/4 mx-4 text-justify p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Política de Privacidad
        </h1>

        <p className="mb-4">
          En <strong>HipTek</strong>, valoramos tu privacidad y estamos
          comprometidos a proteger la información personal que nos compartes.
          Esta política de privacidad describe cómo recopilamos, usamos y
          protegemos tu información.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Información que recopilamos
        </h2>
        <p className="mb-4">
          Recopilamos la información personal que nos proporcionas
          voluntariamente cuando te registras en nuestro sitio, realizas una
          compra o te comunicas con nuestro equipo de soporte. Esto puede
          incluir tu nombre, dirección, correo electrónico, número de teléfono y
          detalles de pago.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          2. Uso de tu información
        </h2>
        <p className="mb-4">
          Utilizamos la información que recopilamos para procesar tus pedidos,
          mejorar tu experiencia en nuestro sitio, y mantenerte informado sobre
          nuestras últimas actualizaciones y ofertas.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          3. Protección de la información
        </h2>
        <p className="mb-4">
          Implementamos medidas de seguridad adecuadas para proteger tu
          información personal contra accesos no autorizados, alteraciones o
          divulgaciones. Tus datos de pago están encriptados y asegurados.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
        <p className="mb-4">
          Utilizamos cookies para mejorar la funcionalidad del sitio y para
          brindarte una experiencia más personalizada. Puedes configurar tu
          navegador para rechazar las cookies si prefieres no aceptarlas.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          5. Cambios en la política
        </h2>
        <p className="mb-4">
          Nos reservamos el derecho de actualizar esta política de privacidad
          cuando sea necesario. Te notificaremos cualquier cambio a través de
          nuestro sitio web o por correo electrónico.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre nuestra política de privacidad, puedes
          contactarnos en
          <a href="mailto:info@hiptek.com" className="text-blue-500 underline">
            {" "}
            info@hiptek.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Policy;
