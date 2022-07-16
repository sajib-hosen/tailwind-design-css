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


      {/* Text strack ------------------------------------------------- */}
      <div className='border border-red-200 h-screen relative'>
        <div className='flex justify-start  h-full '>
           <span className=" mt-5 text-left font-poppins textStoke">About</span>
        </div>

          <div className='absolute top-0 left-10 flex flex-col  items-start h-full ' >
            <p className='text-6xl font-bold'>About</p>
            <p className='mt-20 w-2/4 text-left text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi eum veniam, repellendus quam iste ipsam culpa adipisci, nulla non odit deleniti provident ea consectetur nisi eaque ex expedita sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi eum veniam, repellendus quam iste ipsam culpa adipisci, nulla non odit deleniti provident ea consectetur nisi eaque ex expedita sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi eum veniam, repellendus quam iste ipsam culpa adipisci, nulla non odit deleniti provident ea consectetur nisi eaque ex expedita sapiente.</p>
          </div>

      </div>


      {/* snip ------------------------------------------ */}

      <div className='border-2 border-green-300  h-screen w-screen flex snap-x snap-mandatory overflow-scroll'>
        <div className='flex-shrink-0 snap-start bg-slate-200 w-screen h-screen flex justify-center items-center'>1</div>
        <div className='flex-shrink-0 snap-start bg-red-200 w-screen h-screen flex justify-center items-center'>2</div>
        <div className='flex-shrink-0 snap-start bg-orange-200 w-screen h-screen flex justify-center items-center'>3</div>
        <div className='flex-shrink-0 snap-start bg-amber-200 w-screen h-screen flex justify-center items-center'>4</div>
        <div className='flex-shrink-0 snap-start bg-lime-200 w-screen h-screen flex justify-center items-center'>5</div>
      </div>



    </div>
  );
}

export default App;

// https://design-creation.webflow.io/
