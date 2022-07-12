import { useState } from "react";
import { database } from "../../../firebase/firebase-config";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";

interface Title {
  title: string;
}

export const NewTitle = () => {
  const [title, setTitle] = useState<Title>({ title: "" });
  const [newObj, setNewObj] = useState([]);
  const collectionRef = collection(database, "userID");
  const titleName = title.title;

  const createList = () => {
    setDoc(doc(database, "userID", titleName), { word: [] }).then(() =>
      console.log("Data Added")
    );
  };

  const addWord = async () => {
    const docRef = doc(database, "userID", titleName);
    const data = await getDoc(docRef);
    const obj = data.data()?.words;

    obj.push({ word: "word 4", translation: "translation 4" });

    setDoc(doc(database, "userID", titleName), {
      words: obj,
    }).then(() => console.log("word added"));
  };

  const getList = async () => {
    const docRef = doc(database, "userID", titleName);
    const data = await getDoc(docRef);
    const words = data.data()?.words;
    console.log(words);
  };

  return (
    <div className="title__container">
      <div className="title__header">Create a new List</div>
      <div className="title__input">
        <input
          type="text"
          placeholder="Enter a title..."
          onChange={(e) => setTitle({ title: e.currentTarget.value })}
        />
        <p onClick={addWord}>Create</p>
      </div>
    </div>
  );
};
