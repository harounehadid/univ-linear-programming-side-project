import logo from './logo.svg';
import './App.css';

function App() {
  let simTable = [
    [-2,  -1,   1,  1,  0,  0,  -2],
    [-1,  -3,  -1,  0,  1,  0,  -5],
    [-2,   1,  -2,  0,  0,  1,  -3],
    [-3,  -4,  -2,  0,  0,  0,   0]
  ];

  const findMinZ = () => {
    let min = simTable[0][6];
    let minZIndex = 0;

    for (let i = 1; i < 4; i++) {
      if (simTable[i][6] < min) {
        min = simTable[i][6]
        minZIndex = i;
      }
    }

    console.log("min z = " + min);

    return minZIndex;
  }

  const findMinFactor = minZIndex => {
    let min = simTable[3][0] / simTable[minZIndex][0];
    let minIndex = 0;

    for (let j = 1; j < 7; j++) {
      let divi = simTable[3][j] / simTable[minZIndex][0];

      if (divi < min) {
        min = divi;
        minIndex = j;
      }
    }

    return minIndex;
  }

  let pivotPoint = {x: findMinZ(), y:findMinFactor()};

  const generateNewTable = () => {
    
  }

  return (
    <div className="App">
      <body>
        <h1 className='title'>Linear Programming Dual Simplex</h1>
      </body>
    </div>
  );
}

export default App;
