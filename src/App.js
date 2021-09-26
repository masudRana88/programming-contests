import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Employees from './components/Employees/Employees';

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Employees></Employees>
    </div>
  );
}

export default App;
