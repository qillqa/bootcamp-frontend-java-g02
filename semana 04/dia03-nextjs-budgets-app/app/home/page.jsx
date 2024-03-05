'use client'

import MonitorBudget from '@/components/MonitorBudget'
import { deleteExpense, fetchExpenses } from '@/services/expenses'
import { useEffect, useState } from 'react'

import { toast } from "sonner";

export default function HomePage() {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0)
  
  useEffect(() => {
    fetchExpenses()
      .then(data => {
        console.log(data)
        setExpenses(data)
      })
  }, [])

  useEffect(() => {
    const budgets = JSON.parse(localStorage.getItem('budget-data'))
    
    // agregado por mua
    if(budgets) {
      setBudget(budgets.amount)
    }else{
      setBudget(0)
    }

    // setBudget(budgets.amount)
  }, [])

  const handleDelete = (id) => {
    // TODO: Eliminar un expense llamando al API

    // console.log('estoy eliminando un expense')

    console.log(id)

    deleteExpense(id)
      .then(data => {
        toast.success('Se elimino el expense correctamente')

        fetchExpenses()
        .then(data => {
          console.log(data)
          setExpenses(data)
        })
      })
      .catch(error => {
        console.log(error)
        toast.success('Hubo un error al eliminar')
      })

  }

  return (
    <>
      <MonitorBudget budget={budget} expenses={expenses}  />

      <h1 className='text-3xl my-4'>Expense list</h1>

      <table className='table-auto border-collapse border-spacing-2 border border-slate-400'>
        <thead>
          <tr>
            <th className='border border-slate-300 p-2'>Name</th>
            <th className='border border-slate-300 p-2'>Amount</th>
            <th className='border border-slate-300 p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => {
            return (
              <tr key={expense.id}>
                <td className='border border-slate-300 p-2'>{expense.name}</td>
                <td className='border border-slate-300 p-2'>S/ {expense.amount}</td>
                <td className='border border-slate-300 p-2'>
                  <button 
                    className='bg-red-600 px-2 text-white' 
                    onClick = {() => handleDelete(expense.id)}
                    >
                    Delete
                    </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}