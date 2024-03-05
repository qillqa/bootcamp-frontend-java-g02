import HeaderLogin from "@/components/HeaderLogin";
import Link from "next/link";

export default function RegisterPage() {
  /* TODO: Trabajar en la maquetación de esta página agregando los campos: first_name, last_name, email, password */

  return (
    <>
      <HeaderLogin />

      <main className="containe w-[400px] h-screen mx-auto space-y-6 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col justify-center">

          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-semibold">Register</h1>
            <p className="text-sm text-slate-600">Enter your email below to register your account.</p>
          </div>

          <form className="flex flex-col gap-2 p-8">
            <label className="font-bold">First Name</label>
            <input className="border p-3 shadow-sm rounded-md" type="text" placeholder="Jhon" />
    
            <label className="font-bold">Last Name</label>
            <input className="border p-3 shadow-sm rounded-md" type="text" placeholder="Doe" />

            <label className="font-bold">Email</label>
            <input className="border p-3 shadow-sm rounded-md" type="email" placeholder="jhondoe@mail.com" />
            
            <label className="font-bold">Password</label>
            <input className="border p-3 shadow-sm rounded-sm" type="password" placeholder="Ej. supersecret" />
            
            <button className="mt-4 border p-3 bg-sky-700 text-white rounded-md cursor-pointer">Register</button>
          </form>

          <div className="flex justify-center gap-2 font-bold">
            <span>Already have an account?</span> <Link href="/" className="text-sky-500">Login</Link>
          </div>

        </div>
      </main>
    </>
  )
}