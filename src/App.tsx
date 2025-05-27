import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext";

import "./styles/globals.css";
import "./styles/theme.css";

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
