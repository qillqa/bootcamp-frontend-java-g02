import MonitorBudget from '@/components/MonitorBudget'

export default function HomePage() {
  return (
    <>
      <MonitorBudget />

      <h1 className='text-3xl my-4'>Expense list</h1>

      <ul className='flex flex-col gap-4'>
        <li>
          expense.name - S/ expense.amount <button className='bg-red-600 px-2 text-white'>Delete</button>
        </li>
        <li>expense.name - S/ expense.amount <button className='bg-red-600 px-2 text-white'>Delete</button></li>
        <li>expense.name - S/ expense.amount <button className='bg-red-600 px-2 text-white'>Delete</button></li>
      </ul>
    </>
  )
}