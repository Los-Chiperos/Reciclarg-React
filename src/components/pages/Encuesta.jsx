import React, { useEffect } from 'react';

const Encuesta = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // esto ocupará toda la altura de la pantalla
        }}>
            <div 
                data-tf-widget="Aal0Xkne" 
                data-tf-opacity="100" 
                data-tf-iframe-props="title=Calculadora de Huella de Carbono - Reciclarg" 
                data-tf-transitive-search-params 
                data-tf-medium="snippet" 
                style={{ 
                    width: "80%", 
                    height: "80%",
                }}
            />
        </div>
    );
};

export default Encuesta;