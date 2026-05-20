// import { useEffect, useState } from 'react'
// import { supabase } from './lib/supabase'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Expense from "./pages/Expense";
import Grocery from "./pages/Grocery";
import Recipe from "./pages/Recipe";
import Notes from "./pages/Notes";

export default function App() {
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   fetchTodos()
  // }, [])

  // async function fetchTodos() {
  //   const { data, error } = await supabase
  //     .from('todos')
  //     .select('*')

  //   if (error) {
  //     console.error(error)
  //   } else {
  //     setTodos(data)
  //   }
  // }

  return (
    <div>
      {/* <h1>Todos</h1>
      
      {todos.map(todo => (
        <p key={todo.id}>{todo.todo}</p>
      ))} */}
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/expense" element={<Expense />} ></Route>
        <Route path="/grocery" element={<Grocery />} ></Route>
        <Route path="/recipe" element={<Recipe />} ></Route>
        <Route path="/notes" element={<Notes />} ></Route>
        <Route path="*" element={<Home />} ></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}