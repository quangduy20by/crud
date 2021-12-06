import { Routes, Route, Link } from "react-router-dom";
import Create from "./Create";
import "./App.css";
import Update from "./Update";
import Read from "./Read";

function App() {
  return (
    <div>
      
      <div className="main">


        <div className="style">
          <ul>
            <li>
              <Link to="/create">Add</Link>
            </li>
            <li>
              <Link to="/read">Read and Update</Link>
            </li>
          </ul>
        </div>



        <div></div>
        <Routes>
          <Route path="/Create" element={<Create />} />

          <Route path="/Read" element={<Read />} />

          <Route path="/Update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
