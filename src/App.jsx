import Loader from "./components/Loader"

function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "5rem",
      textAlign: "center",
      backgroundColor: "#2F3545",
    }}>
      <h1 style={{
        padding: "1rem",
        fontFamily: "NeueBit",
        fontWeight: "bold",
        textDecoration: "dotted underline",
        color: "#fff",
      }}>Enygma Loader - Pure CSS</h1>
      <Loader />
    </div>
  )
}

export default App
