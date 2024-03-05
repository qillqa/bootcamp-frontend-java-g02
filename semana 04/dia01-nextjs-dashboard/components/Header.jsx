import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-amber-200 py-4 px-6">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">
          <Link
            href='/home'
            className="hover:text-orange-800"
          >
            Budget App
          </Link>
        </h1>
        <nav className="flex gap-3">
          
          <Link
            href='/home/budget/new'
            className="hover:text-orange-800"
          >
            New budget
          </Link>
          <Link
            href='/home/budget/expense'
            className="hover:text-orange-800"
          >
            New Expense
          </Link>

          <Link
            href="/"
            className="hover:text-red-800 font-medium"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  )
}
