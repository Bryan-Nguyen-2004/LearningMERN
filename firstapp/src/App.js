import './App.css'
import Home from './pages/home/home'
import NavBar from './components/navbar/navbar'
import Posts from './components/posts/posts'
import PostPage from './pages/postPage/postPage'
import CreateAccount from './pages/createAccount/createAccount'
import Login from './pages/login/login'
import Settings from './pages/settings/settings'
import WritePost from './pages/writePost/writePost'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
