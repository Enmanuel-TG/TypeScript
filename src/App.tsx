import { Counter } from './components/Counter'
import  Users  from "./components/Users";
function App() {
  return (
    <div><h1 className="mt-5 mr-5 ml-5 text-2xl">
      React +  typeScript
    </h1>
      <hr/>
      <Counter />
      <Users/>
    </div>
  )
}
export default App
