import pizza from "../src/components/pizza";
import img1 from '../src/images/pizza.jpg';
function App() {
  return (
    <div className="container">
      <div className="main_block">
        <pizza img={img1} />
      </div>
    </div>
  );
}

export default App;
