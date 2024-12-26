import { Home, AllProducts, About, Contact, Account, NavBar, Footer } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className=" flex flex-col"> {/* Full height container with flex column */}
      <NavBar />
      <main > {/* Main content takes up the remaining space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
