import './App.css'
import Home from './pages/home/home'
import NavBar from './components/navbar/navbar'
import Posts from './components/posts/posts'
import PostPage from './pages/postPage/postPage'
import CreateAccount from './pages/createAccount/createAccount'
import Login from './pages/login/login'
import Settings from './pages/settings/settings'
import WritePost from './pages/writePost/writePost'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = false;

  return (
      <div style = {{padding:0}}>    
      <Router>
          <NavBar />
          <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route path="/posts" element={<Home />} >
              </Route>
              <Route path="/createAccount" element={currentUser ? <Home /> : <CreateAccount />}>
              </Route>
              <Route path="/login" element={currentUser ? <Home /> : <Login />}></Route>
              <Route path="/post/:id" element={<PostPage />}>
              </Route>
              <Route path="/write" element={currentUser ? <WritePost /> : <WritePost />}></Route>
              <Route path="/settings" element={currentUser ? <Settings /> : <Settings />}>
              </Route>
          </Routes>
      </Router>
      </div>
  );
}


export default App;
