/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextEdit" aboutText="About Us" />
      {/* Navbar component being loaded from './components/Navbar.js', This loading requires exporting property of JavaScript which can be learnt by exporting different modules in JavaScript. */}
        <div className="container my-3">
        <TextForm heading="Enter the text to analyse:" />
      </div>
    </>
  );
}

export default App;
