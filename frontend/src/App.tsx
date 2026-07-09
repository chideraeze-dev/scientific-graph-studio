import Header from "./components/Header"
import Footer from "./components/Footer"  
import Workspace from "./components/Workspace"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-8">
        <h2 className="text-2xl font-bold">
          <Workspace />
        </h2>
      </main>
      <Footer />
    </div>
  )
}

export default App