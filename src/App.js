import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/comments' element={<Comments />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
