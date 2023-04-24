import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home';
import List from './Components/List';
import User from './Components/User';

function App() {
  if(true){
    return (
      <Router>
        <List />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/user' element={<User/>}/>
        </Routes>  
      </Router>
    ); 
  }
}

export default App;
