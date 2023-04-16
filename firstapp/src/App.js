import './App.css'
import Home from './pages/home/home'
import NavBar from './components/navbar/navbar'
import Posts from './components/posts/posts'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
