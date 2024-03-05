export default function BudgetExpensePage() {
  return (
    <form className='w-96 mx-auto'>
      <h1 className='text-center text-3xl mb-8'>New Expense</h1>

      <section className='flex flex-col gap-4 bg-slate-100 p-8 shadow-lg'>
        <label className='font-medium'>
          Name
          <input
            type='text'
            name='name'
            placeholder='Restaurant, Travel, etc.'
            className='border w-full p-3 mt-2'
          />
        </label>

        <label className='font-medium'>
          Amount
          <input
            type='number'
            name='amount'
            placeholder='0.00'
            className='border w-full p-3 mt-2'
          />
        </label>

        <input
          type='submit'
          value='Save Expense'
          className='w-full bg-amber-300 p-3 font-medium cursor-pointer hover:bg-amber-400 duration-300'
        />
      </section>
    </form>
  )
}