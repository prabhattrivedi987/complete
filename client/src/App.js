import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Components/AddTodo/AddTodo';
import Navbar from './Components/Navbar/Navbar';
import Todo from './Components/Todo/Todo';
import Doing from './Components/Doing/Doing';
import Done from './Components/Done/Done';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/all' element={<Todo/>}/>
        <Route path='/create' element={<AddTodo/>}/>
        <Route path='/doing' element={<Doing/>}/>
        <Route path='/done' element={<Done/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
