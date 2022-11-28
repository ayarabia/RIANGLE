import './App.css';
import Counter from './components/counter';
import Footer from './components/footer';
import Load from './components/load';
import NavBarCom from './components/navbar';
import Stories from './components/stories';
import WorkCard from './components/workCard';
import Works from './components/works';
import AnimatedCursor from "react-animated-cursor"
import Cursor from "react-cursor-follow";
function App() {
  return (
    <div >
     <Cursor hollow color="#ee82ee" duration={0.8} size={45}  custom={false} className="tt"/>
 
  {/* <AnimatedCursor 
    className="test"
     color="193, 11, 111" 
    outerStyle={{
      // border: '3px solid red',
     width:"50px",
      height:"50px",
      background:"transparant"
     }}
     innerSize={0}
      outerSize={20}      
      outerScale={1.7}
    
    />  */}
  <NavBarCom></NavBarCom>
    <Counter></Counter>
    <Stories></Stories>
   <Works></Works>
  <Load></Load>
  <Footer></Footer>
    </div>
  );
}

export default App;
