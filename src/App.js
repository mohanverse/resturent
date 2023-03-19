import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Another from './components/Another';
import Gallry from './Gallry';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='navbarjsx'>
      <Navbar/>
    </div>
    <Hero/>

    <div className="App">
      <Card name="Fryeo-Burger" img="https://b.zmtcdn.com/data/pictures/chains/6/19173286/c7f906926dd4b954e9a44db342caae44_o2_featured_v2.jpg?output-format=webp"/>
      <Card name="McDonald's Burger" img="https://b.zmtcdn.com/data/pictures/chains/1/171/364f7ce98d396ddabbd374f8c2f84953_o2_featured_v2.jpg?output-format=webp"/>
      <Card name="Keventers-Milk" img="https://b.zmtcdn.com/data/pictures/chains/4/311634/ce04c0565dd5789a5971137ac782b974_o2_featured_v2.jpg?output-format=webp"/>
      <Card name="Keventers ice Cream" img="https://b.zmtcdn.com/data/pictures/chains/0/19640740/8e0ef1d16cab57a7ff41a90ca9f43f4e_o2_featured_v2.jpg?output-format=webp" />
    </div>

    <Another />
    <Gallry/>
    <Footer/>

    

    </>
  );
}

export default App;
