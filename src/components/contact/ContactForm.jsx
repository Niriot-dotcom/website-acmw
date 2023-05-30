import { Textarea } from "flowbite-react";
import React from "react";

function ContactForm() {
    const handleonclick=()=>{
        console.log("hola");
    }
  return (
   
     /* <div >|
        <label >Nombre: </label><input type="text" required className="border border-black" ></input>
        <label >Apellido: </label><input type="text" required  className="border border-black"></input>
        <label  >Teléfono: </label><input type="text" required className="border border-black"></input>
        <label >Correo: </label><input type="email" required   className= "border border-black" ></input>
        <label  >Asunto: </label><input type="text" required className="border border-black"></input>
        <button type="submit">Enviar</button>
      </div>*/

      <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Teléfono
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="+52"/>
          <p class="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Correo electrónico
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="@"/>
          <p class="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Asunto
          </label>
          <Textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="..."/>
          <p class="text-gray-600 text-xs italic"></p>
        </div>
      </div>      
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
        <button onClick={handleonclick} className="bg-acmw-blue text-acmw-purple w-72 h-10 mb-8 rounded-full text-center hover:bg-acmw-purple hover:text-white transition-all duration-500">Enviar</button>
        {/*funcion que vas a llamar*/}
        </div>
      </div>
     
    </form>
  )
}
export default ContactForm;
