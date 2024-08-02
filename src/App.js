import {Routes} from 'react-router-dom';
import { Header } from './Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;