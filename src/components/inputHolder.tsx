import React, { forwardRef } from "react";


// 1️⃣ forwardRef ka TypeScript generic syntax fix hota hai:
//    - Pehla type: `ref` kis element ko point karega (e.g., HTMLInputElement)
//    - Dusra type: Component ke props ka structure kya hoga
//    - Iska order change nahi kar sakte!


// 3️⃣ forwardRef kab use karna chahiye?
//    - Jab kisi functional component ko `ref` pass karna ho
//    - Jab kisi child component ka `DOM element` parent component se access karna ho
//    - Jab kisi third-party library ke component ko `ref` ke saath use karna ho

const InputHolder = forwardRef<HTMLInputElement, { placeholder: string }>(
  ({ placeholder }, ref) => {
    return (
      <div>
        <input
          type="text"
          className="px-4 py-2 rounded border-slate-600 border text-black-500 shadow-md m-2"
          ref={ref}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default InputHolder;
