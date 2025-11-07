import "./App.css";

const toggleTheme = () => {
  const current = document.body.getAttribute("data-theme");
  document.body.setAttribute(
    "data-theme",
    current === "light" ? "dark" : "light"
  );
};

function App() {
  return (
    <>
      <h1>Hello Enoca Landing Page</h1>
      <button onClick={toggleTheme}>Tema Değiştir</button>
      <button className="btn">deneme butonu</button>
    </>
  );
}

export default App;
