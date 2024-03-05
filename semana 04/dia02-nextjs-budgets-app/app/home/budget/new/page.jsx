export default function BudgetNewPage() {
  return (
    <form className='w-96 mx-auto'>
      <h1 className='text-center text-3xl mb-8'>New Budget</h1>

      <section className='flex flex-col gap-4 bg-slate-100 p-8 shadow-lg'>
        <label className='font-medium'>
          Budget amount
          <input
            type='number'
            name='budget'
            placeholder='0'
            className='border w-full p-3 mt-2'
          />
        </label>

        <input
          type='submit'
          value='Save Budget'
          className='w-full bg-amber-300 p-3 font-medium cursor-pointer hover:bg-amber-400 duration-300'
        />
      </section>
    </form>
  )
}