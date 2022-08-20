import FirstComponent from "./components/FirstComponent";
import Header from "./components/Header";
import "./App.css";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <FirstComponent /> */}
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Footer />
    </div>
  );
}

export default App;
