import './App.css'
import SideBar from './components/SideBar';
import Main from './components/Main';
import {useEffect} from 'react';


function App() {


  /*
  화면 크기마다 크기를 재조정
  */
  useEffect(() => {
    function resize() {
      const baseW = 1920;
      const baseH = 1080;

      const scale = Math.min(
        window.innerWidth / baseW,
        window.innerHeight / baseH
      );

      document.getElementById("world").style.transform = `scale(${scale})`;
    }

    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []); // mount 했을 때

  return (
      <div className='homepage' id='world'>
        <SideBar />
        <Main />
      </div>
  );
}

export default App
