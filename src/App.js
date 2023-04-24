import HomePage from "./pages/HomePage";
import UserContext from "./context/user/UserContext";
function App() {
   
  return (
    <>
    <UserContext>
    <HomePage/>
    </UserContext>

    </>
  );
}

export default App;
