
import './App.css';
import Fotter from './component/Fotter';
import Hero from './component/Hero';
import Join from './component/Join';
import Plans from './component/Plans';
import Program from'./component/Program';
import Reason from'./component/Reason';
import Testimonial from './component/Testimonial';
function App() {
  return (
    <div className="App">
     <Hero/>
     <Program/>
     <Reason/>
     <Plans/>
     <Testimonial/>
     <Join/>
     <Fotter/>
    </div>
  );
}

export default App;
