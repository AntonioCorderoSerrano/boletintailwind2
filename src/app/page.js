'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState([false, false]);

  const handleClick = (index) => {
    setClicked((prev) => {
      const newClicked = [...prev];
      newClicked[index] = true;
      setTimeout(() => {
        newClicked[index] = false;
        setClicked([...newClicked]);
      }, 1000);
      return newClicked;
    });
  };

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-green-500">
        Hover me
      </button>
      <br />

      <h1>Ejercicio 2</h1>
      <div className="bg-purple-500 w-16 h-16 transition-transform duration-500 hover:scale-125"></div>
      <br />

      <h1>Ejercicio 3</h1>
      <button className="bg-red-500 text-white px-6 py-3 rounded animate-bounce">
        Click me!
      </button>
      <br />

      <h1>Ejercicio 4</h1>
      <div className="bg-yellow-500 w-24 h-24 transition-opacity duration-700 hover:opacity-50"></div>
      <br />

      <h1>Ejercicio 5</h1>
      <div className="bg-blue-500 w-24 h-24 animate-fade-in">
        Aparece suavemente
      </div>
      <br />

      <div>
      <h1>Desafío final</h1>
      <div className="bg-gray-100 flex h-64">
        <div className="grid grid-cols-2 gap-2 p-2 w-64 shadow-md">
          <img
            src="https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj"
            alt="Imagen 1"
            width={100}
            height={100}
            className={`rounded-lg transition-transform duration-500 hover:scale-110 cursor-pointer ${clicked[0] ? "animate-bounce" : ""}`}
            onClick={() => handleClick(0)}
          />
          <img
            src="https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj"
            alt="Imagen 2"
            width={100}
            height={100}
            className={`rounded-lg transition-transform duration-500 hover:scale-110 cursor-pointer ${clicked[1] ? "animate-bounce" : ""}`}
            onClick={() => handleClick(1)}
          />
        </div>
      </div>
      </div>
    </div>
  );
}