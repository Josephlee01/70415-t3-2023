import { colRef } from './firebase';
import { getDocs } from 'firebase/firestore';


// get collection data
getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
});

function App() {
  return (
    <div className="App">
      <h1>70415 Jinwoong LEE WIC</h1>
    </div>
  );
}

export default App;
