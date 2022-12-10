import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Contact } from './pages/Contact';
import { FAQs } from './pages/FAQs';
import { Error404 } from './pages/Error404';
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path={`/item/:id`} element={<ItemDetailContainer />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="faqs" element={<FAQs/>}/>
          <Route path='*' element={<Error404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;