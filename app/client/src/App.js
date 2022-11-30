import { Routes,Route } from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard'
import Bar from "./components/bar/bar"
import { useState } from 'react';
import Form from "./components/form/form";
import Line from "./components/line/line";
import Pie from "./components/pie/pie";
import Topbar from './components/topbar/topbar';
import User from './components/user/user';
import About from './components/about/about';
import Info from './components/info/info';
import Help from './components/help/help';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="App">
        <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/user" element={<User />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/help" element={<Form />} />
              <Route path="/info" element={<Info />} />
              <Route path="/form" element={<Help />} />
             
            </Routes>
          </main>

    </div>
  );
}

export default App;
