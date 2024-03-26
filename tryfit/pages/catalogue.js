import Header from "@/components/Header";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Products"));
  const data = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Sort data with error handling for undefined 'date' fields
  return data.sort((a, b) => {
    if (!a.date) return 1; // Move documents without 'date' to the end
    if (!b.date) return -1; // Keep documents with 'date' at the beginning
    return a.date.localeCompare(b.date); // Sort by 'date' if both exist
  });
}

export default function catalogue(){
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetchDataFromFirestore().then(data => {
            setUserData(data);
        });
    }, []);
    return(
        <div>
            <Header />

            {/* elevate your fabrics */}
            <div className="flex flex-col justify-center text-center items-center mt-36 text-white ">
                <div className="flex text-8xl gap-5 font-heavitas">
                    <h1 className=" text-btn_hover">ELEVATE</h1>
                    <h1>YOUR FABRICS</h1>
                </div>
                <div className="flex text-8xl gap-5 font-heavitas">
                    <h1>WITH</h1>
                    <h1 className="text-btn_hover">TRYFIT</h1>
                    <h1>FABRICS</h1>
                </div>
                <p className=" mt-10 text-2xl font-aventa">Dive Into Our Collection Of Meticulously Crafted Fabric, Designed For Longevity And Performance</p>
            </div>
            <div>
            {userData.map((user) => (
                <div key={user.id} className='mb-4'>
                <p className='text-xl text-white font-semibold'>{user.Name}</p>
                {/* Displaying Name and CategoryID from each document */}
                <p>{user.Name}</p>
                <p>{user.CategoryID}</p>
            </div>
            ))}
            </div>

        </div>
    )
}