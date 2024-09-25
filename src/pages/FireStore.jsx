import React from "react";
import { getFirestore, collection, addDoc, doc, getDoc , where, query, getDocs, updateDoc} from "firebase/firestore";
import {} from "../context/firebase";
import { app } from "../firebase";

const firestore = getFirestore(app);
const FireStore = () => {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Delhi",
      country: "India",
      pin: 1234,
    });
    console.log(result);
  };

  const makeSubCollection=async()=>{
    const result = await addDoc(collection(firestore, "cities/R1XYJ71pFAWdWNQhdapM/places"), {
         name : "This is a place",
         description : "This is a place description",
         date: Date.now(),
        });
        console.log(result);

  }

  const readData = async () => {
    const docRef = doc(firestore, "cities", "KMI0fwBjLCkDPCtAgerj");
     const snap =   await getDoc(docRef);

     console.log(snap.data());
    }

    const getDocumentsByQuery = async () =>{
        const qRef = collection(firestore, "users");
        const q = query(qRef, where("isMale", "==", true) );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(data => console.log(data.data()));
    }

    const update = async ()=>{
        const docRef = doc(firestore, "users", "3gejqsqlqTu5EorgYhd1");
       
        const updated = await  updateDoc(docRef, {name: "Gunde"});
        console.log("updated!");
    }
  return <div>FireStore
    <div className="butn flex gap-2 justify-evenly">
        <button className="text-xl font-bold bg-black text-white px-2" onClick={writeData}>Put Data</button>
        <button className="text-xl font-bold bg-black text-white px-2" onClick={makeSubCollection}>Put Sub Data</button>
        <button className="text-xl font-bold bg-black text-white px-2" onClick={readData}>Read Data</button>
        <button className="text-xl font-bold bg-black text-white px-2" onClick={getDocumentsByQuery}>Read Data By Query</button>
        <button className="text-xl font-bold bg-black text-white px-2" onClick={update}>Update Data</button>
    </div>
  </div>;
};

export default FireStore;
