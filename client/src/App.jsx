// import { Button } from "./components/ui/button"
// import Login from "./pages/Login"
// function App() {
//   return (
//     <main>
//       <Login />
//     </main>
//   )
// }

// export default App


import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <main>
        <Login />
      </main>
    </Router>
  );
}

export default App;