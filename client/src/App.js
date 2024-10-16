import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from "./Add"
import Books from "./Books"
import Update from "./Update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
