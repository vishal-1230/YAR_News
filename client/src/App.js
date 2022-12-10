import './App.css';
import Homepage from './Homepage/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleNews from './SingleNewsPage/SingleNews';
import CategoryNews from './Category/CategoryNews';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/newsSingle' element={<SingleNews />} />
        <Route path='/india' element={<CategoryNews category='india' />} />
        <Route path='/finance' element={<CategoryNews category='finance' />} />
        <Route path='/world' element={<CategoryNews category='world' />} />
        <Route path='/politics' element={<CategoryNews category='politics' />} />
        <Route path='/business' element={<CategoryNews category='business' />} />
        <Route path='/technology' element={<CategoryNews category='technology' />} />
        <Route path='/education' element={<CategoryNews category='education' />} />
        <Route path='/health' element={<CategoryNews category='health' />} />
        <Route path='/sports' element={<CategoryNews category='sports' />} />
        <Route path='/entertainment' element={<CategoryNews category='entertainment' />} />
      </Routes>
    </div>
  );
}

export default App;
