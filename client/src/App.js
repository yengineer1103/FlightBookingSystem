import './App.css';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <header>
      <div style={{minHeight:'10vh', width:'100%',background:'rgb(25 118 210/55%)'}}></div>
      <TopNav/>
      </header>
      <div className='main-body'>
        <h1>Welcome to my booking website</h1>
      </div>
      <footer>
        <div style={{minHeight:'10vh', width:'100%',background:'rgb(25 118 210/55%)'}}></div>
      </footer>
    </div>
  );
}

export default App;
