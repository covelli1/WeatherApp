import Home from './Routes/Home';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <div className='bg-blue-900 h-screen'>
      <Router>
          <Header/>

          
          <div className='p-3'>
            <Routes>
              
              {/* MAKE SURE BOTH ROUTE TO HOME PAGE */}
              <Route exact path="/" element={<Home />}></Route>
            
              
            </Routes>
          </div>
          

          <Footer/>
        </Router>
    </div>
    
  );
}

export default App;
