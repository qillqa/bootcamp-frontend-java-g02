export default function MonitorBudget({ budget, expenses }) {
  return (
    <section className='bg-orange-300 flex justify-center gap-10 p-4'>
      <div className='text-center'>
        <h4 className='text-3xl font-extrabold'>15000</h4>
        <h6 className='text-lg font-semibold'>Budget</h6>
      </div>
      <div>
        <h4 className='text-3xl font-extrabold'>10000</h4>
        <h6 className='text-lg font-semibold'>Expenses</h6>
      </div>
      <div>
        <h4 className='text-3xl font-extrabold'>5000</h4>
        <h6 className='text-lg font-semibold'>Balance</h6>
      </div>
    </section>
  )
}