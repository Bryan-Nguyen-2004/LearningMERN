import './App.css'
import Home from './pages/home/home'
import NavBar from './components/navbar/navbar'
import Posts from './components/posts/posts'
import PostPage from './pages/postPage/postPage'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
