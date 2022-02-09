import './App.css';

function App() {


  let runCode = () => {
    var ageCat = 2;
    if (ageCat === 2) {
      var ageCHuman = ageCat * 24
      console.log(ageCHuman);
    }
    console.log(ageCHuman);
  }

  return (
    <div className="App">

      <div className='flex flex-col md:flex-row'>
        <div className='contenedor1'>
          <h1>click 1</h1>
          <h1>click 2</h1>
        </div>
        <div className='contenedor2'>
          <h1>click 3</h1>
          <h1>click 4</h1>
        </div>
        <div className='contenedor3'>
          <h1>click 5</h1>
          <h1>click 6</h1>
        </div>
        <div className='contenedor3'>
          <h1>click 5</h1>
          <h1>click 6</h1>
        </div>
        <div className='contenedor3'>
          <h1>click 5</h1>
          <h1>click 6</h1>
        </div>
      </div>

      <button
        className='p-3 border-4 border-black'
        onClick={runCode}>click me!</button>

    </div>
  );
}

export default App;
