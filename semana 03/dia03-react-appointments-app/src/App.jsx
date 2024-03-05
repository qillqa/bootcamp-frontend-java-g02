import Header from "./components/Header";
import Appointments from "./pages/Appointments";

export default function App() {
  return (
    <>
      <Header title="Citas médicas para mascotas" subtitle="subtitletext" />

      <main className="container border mx-auto flex gap-12 p-5">
        <Appointments />
      </main>
    </>
  )
}