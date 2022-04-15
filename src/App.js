import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs } from "./formSource";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const currentUser = false;

  const ReqireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={
              <ReqireAuth>
                <Home />
              </ReqireAuth>
            } />
            <Route path="users">
              <Route index element={
                <ReqireAuth>
                  <List />
                </ReqireAuth>
              } />
              <Route path=":userId" element={
                <ReqireAuth>
                  <Single />
                </ReqireAuth>
              } />
              <Route path="new" element={
                <ReqireAuth>
                  <New inputs={userInputs} title="Add New User" />
                </ReqireAuth>
              } />
            </Route>
            <Route path="products">
              <Route index element={
                <ReqireAuth>
                  <List />
                </ReqireAuth>
              } />
              <Route path=":productId" element={
                <ReqireAuth>
                  <Single />
                </ReqireAuth>
              } />
              <Route path="new" element={
                <ReqireAuth>
                  <New inputs={productInputs} title="Add New Product" />
                </ReqireAuth>
              } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
