import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

{/* .textStoke {
    background-color: #61dafb; 
    color: #ffffff;
    -webkit-text-fill-color: transparent; 
    -webkit-text-stroke: 0.1em transparent;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
    -webkit-background-clip: text;
  } */}

      <div className='border border-red-200 h-36 relative'>
        <div className='flex justify-start '>
           <span className="mx-20 text-left font-poppins textStoke">Text Stoke</span>
        </div>

          <div className='absolute border top-10 left-10' >
            <p className='text-2xl '>this is small text</p>
          </div>

      </div>

    </div>
  );
}

export default App;

// https://design-creation.webflow.io/
