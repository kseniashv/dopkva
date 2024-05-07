import './App.css';
import ToDo from './components/ToDo';
import img1 from "./images/f3.png";
import img2 from "./images/f4.png";
import img3 from "./images/f5.png";
function App() {
    return (
        <div>
            <h1 class="title">Что вам необхоодимо?</h1>
            <div class="main_blocks">
                <ToDo title="Первый блок" img={img1} text='Lofgdjs ttyui poiyt fghjj ghjkoo qqwertydfghjk'/>
                <ToDo title="Второй блок" img={img2} text='Lofgdjs ttyui poiyt fghjj ghjkoo qqwertydfghjk'/>
                <ToDo title="Третий блок" img={img3} text='Lofgdjs ttyui poiyt fghjj ghjkoo qqwertydfghjk'/>
            </div>
        </div>
    );
}
export default App;
