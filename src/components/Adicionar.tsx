import { ToDoItem } from "@/types/ToDoItem";
import { useState } from "react";


export const Adicionar = () => {  
  
    const [itemInput, setItemInput] = useState('');
    const [list, setList] = useState<ToDoItem[]>([
  
    ]);
    
    //Adicionar item
    const handleAddButton = () => {
      if(itemInput.trim() === '' ) return;

      setList([
        ...list,
        {id: list.length + 1 ,label: itemInput, checked: false}
      ]);
      setItemInput('');
    }

    //Deletar item
    const deletarItem = (id: number) => {
      setList(
        list.filter(item => item.id !== id)
      );
    }
    
    //Alterar Item
    const toggleItem = (id: number) => {
      let newList = [...list];
      //loops
      for(let i in newList) {
        if(newList[i].id === id) { 
          newList[i].checked = !newList[i].checked;
        }
      }
      setList(newList);
    }

    return (
  
      <div className="w-screen h-screen flex flex-col  items-center text-2xl">
        
  
        <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-white-700 border-2 border-gray-600">
          <input 
            type="text"
            placeholder="O que deseja fazer?"
            className="flex-1 border-black p-3 text-2xl rounded-md mr-3 text-black"
            value={itemInput}
            onChange={e => setItemInput(e.target.value)}
          />
  
          <button onClick={handleAddButton}>Adicionar</button>
        </div>  
  
        <p className="my-4">{list.length} Item na lista</p>
  
        <ul className="w-full max-w-lg list list-disc pl-5">

          {list.map(item =>  

            <li key={item.id}>

              <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>

              {item.label} - <button onClick={() => deletarItem(item.id)} className="hover:underline">[deletar]</button></li>
            )}
        </ul>
      </div>
    );
  }