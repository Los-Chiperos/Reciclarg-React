import React from "react";


const Eror = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-white w-full">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-teal-100 p-4">
          <div className="rounded-full stroke-teal-600 bg-teal-200">
            <svg
              id="eye-icon"
              className="w-16 h-16"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
          404 - Página no encontrada
        </h1>
        <p className="text-slate-600 mt-5 lg:text-lg">
          La página que buscas no existe o <br />fue removida
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-amber-100 px-12 py-3 text-sm font-bold text-teal-600 transition hover:bg-teal-600 focus:outline-none focus:ring focus:ring-amber-100 border-0 hover:text-amber-100 !important"
        >
          Volver al Menú
        </a>
      </div>
    </div>
  );
};

export default Eror;