import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  const handleLogout = (event) => {
    localStorage.removeItem('auth-token')

    router.push('/') // login
  }

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

          <button
            className="text-red-800 font-medium"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}