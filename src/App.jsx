import "./App.css";
import Header from "./components/layout/header";

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
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
        <button onClick={toggleTheme}>Tema Değiştir</button>
        <button className="btn">deneme butonu</button>
      </main>
      <Footer />
    </>
  );
}

export default App;
