export default function MonitorBudget({ budget, expenses }) {

  const totalExpenses = expenses.reduce((accumulator, current) => {
    return accumulator + current.amount
  }, 0)

  const totalBalance = budget - totalExpenses

  return (
    <section className='bg-orange-300 flex justify-center gap-10 p-4 text-center'>
      <div className='text-center'>
        <h4 className='text-3xl font-extrabold'>{budget}</h4>
        <h6 className='text-lg font-semibold'>Budget</h6>
      </div>
      <div>
        <h4 className='text-3xl font-extrabold'>{totalExpenses}</h4>
        <h6 className='text-lg font-semibold'>Expenses</h6>
      </div>
      <div>
        <h4
          className={`text-3xl font-extrabold ${totalBalance > 0 ? 'text-green-600' : 'text-red-600' }`}
        >{totalBalance}</h4>
        <h6 className='text-lg font-semibold'>Balance</h6>
      </div>
    </section>
  )
}