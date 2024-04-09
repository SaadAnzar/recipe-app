// import { useState, useEffect } from "react";

// import { db } from "@/config/firebase";
// import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const Favourites = () => {
  // const [foods, setFoods] = useState([]);

  // useEffect(() => {
  //   onSnapshot(doc(db, "users", `${user?.uid}`), (doc) => {
  //     setFoods(doc.data()?.favouriteFoods);
  //   });
  // }, [user?.uid]);

  // const foodRef = doc(db, "users", `${user?.uid}`);
  // const removeFood = async (passedId) => {
  //   try {
  //     const result = foods.filter((food) => food.id !== passedId);
  //     await updateDoc(foodRef, {
  //       favouriteFoods: result,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return <div>Favourites</div>;
};

export default Favourites;
