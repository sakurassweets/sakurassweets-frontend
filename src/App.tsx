import './App.css'

function App() {
  console.log('Hello world');
  fetch('https://api.sakurassweets.asion.tk/').then(res => res.json()).then(data => console.log(data.message))
  return (
    <div>Hello! I`m Frontend!</div>
    
  )
}

export default App
