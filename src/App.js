import './App.css';
import Counter from './components/counter';
import Footer from './components/footer';
import Load from './components/load';
import NavBarCom from './components/navbar';
import Stories from './components/stories';
import WorkCard from './components/workCard';
import Works from './components/works';

function App() {
  return (
    <div >
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
