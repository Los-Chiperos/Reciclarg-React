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
        <div 
            dangerouslySetInnerHTML={{
                __html: `
                <div
                    data-tf-widget="Aal0Xkne"
                    data-tf-opacity="100"
                    data-tf-inline-on-mobile
                    data-tf-iframe-props="title=Calculadora de Huella de Carbono - Reciclarg"
                    data-tf-transitive-search-params
                    data-tf-auto-focus
                    data-tf-medium="snippet"
                    data-tf-full-screen>
                </div>
                `
            }}
        />
    );
};

export default Encuesta;
