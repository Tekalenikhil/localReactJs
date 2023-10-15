// import logo from './logo.svg';
import './App.css';
import{ getFirestore, collection,addDoc ,doc,getDoc} from "firebase/firestore";
import{app} from "./firebase"

const firestore = getFirestore(app)

function App() {

  const writeData = async()=>{
    const result =await addDoc(collection(firestore,'cities'),{
      name:'Mumbai',
      pinCode:12345
    });
    console.log("result",result);
  }
  const makeSubcollection = async ()=>{
    await addDoc(collection(firestore,'cities/640mswf0w6GQOXFVSmad/places'),{
      name:"sinhgad",
      desc:"college"
    })
  }

  const getDocuments =async ()=>{
    const ref = doc(firestore,"cities","640mswf0w6GQOXFVSmad");
    const snap =await getDoc(ref);
    console.log(snap.data());
  }
  return (
    <div className="App">
    <h1> Hello firestore App </h1>
    <button onClick={writeData}>Put Data</button>
    <button onClick={makeSubcollection}>Put sub-Data</button>
    <button onClick={getDocuments}>Get Data</button>
    </div>
  );
}

export default App;
