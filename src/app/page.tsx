//Page principal na tela
"use client"

import { Adicionar } from "@/components/Adicionar";


const Page = () => {  
  
  return (

    <div className="w-screen h-screen flex flex-col  items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
        <Adicionar />
        
    </div>
  );
}
export default Page;