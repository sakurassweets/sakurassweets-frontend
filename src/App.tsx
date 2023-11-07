import './App.css';
import Navigation from "./components/Navigation/Navigation";
import UserRoutes from './UserRoutes';

function App() {
  console.log('Hello world');
  fetch('https://api.sakurassweets.asion.tk/').then(res => res.json()).then(data => console.log(data.message))
  return (
    <div>
      <Navigation/>
      <UserRoutes />
    </div>
    
  )
}

export default App
