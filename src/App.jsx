import { Route, Routes } from "react-router-dom";
import { StanPaletowy } from "./magazyn/stanpaletowy/palletcondition";
import { Main } from "./magazyn/Main/Main.jsx";
import { Zgloszenia } from "./magazyn/listazadan/Todolist.jsx";

import Kanbanboard from "./magazyn/kanbantable/Kanbanboardmp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/stanpaletowy" element={<StanPaletowy />} />
      <Route path="/zgloszenia" element={<Zgloszenia />} />
      <Route path="/kanban" element={<Kanbanboard />} />
    </Routes>
  );
};

export default App;
