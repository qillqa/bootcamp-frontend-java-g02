'use client'

import { useState } from "react"

import { createExpense } from "@/services/expenses"
import { useRouter } from "next/navigation" 
import { userAgent } from "next/server"

export default function BudgetExpensePage() {
  const router = useRouter()

  const initialState = {
    name: '',
    amount: 0
  }

  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();

    const newExpense = {
      name: form.name,
      amount: Number(form.amount)
    }
    
    const result = await createExpense(newExpense)

    console.log(result)

    router.push('/home')
  }

  return (
    <form className='w-96 mx-auto' onSubmit={handleSave}>
      <h1 className='text-center text-3xl mb-8'>New Expense</h1>

      {/* {JSON.stringify(form)} */}

      <section className='flex flex-col gap-4 bg-slate-100 p-8 shadow-lg'>
        <label className='font-medium'>
          Name
          <input
            type='text'
            name='name'
            placeholder='Restaurant, Travel, etc.'
            className='border w-full p-3 mt-2'
            onChange={handleChange}
          />
        </label>

        <label className='font-medium'>
          Amount
          <input
            type='number'
            name='amount'
            placeholder='0.00'
            className='border w-full p-3 mt-2'
            onChange={handleChange}
          />
        </label>

        <button
          className='w-full bg-amber-300 p-3 font-medium cursor-pointer hover:bg-amber-400 duration-300'
        >
          Save Expense
        </button>
      </section>
    </form>
  )
}