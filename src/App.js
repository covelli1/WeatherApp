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
    <div className='min-h-screen bg-blue-900'>
      <div className='flex flex-col min-h-screen'>
        <Router>


          <div className=''>
            <Header/>
          </div>
            
  
          <div className='flex-grow'>
            <Routes>
              
              {/* MAKE SURE BOTH ROUTE TO HOME PAGE */}
              <Route path="/" element={<Home />}></Route>
            
              
            </Routes>
          </div>


          <div className=''>
            <Footer/>
          </div>
            
          
        </Router>
      </div>
      
    </div>
    
    
  );
}

export default App;
