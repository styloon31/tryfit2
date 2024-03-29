import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
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



export default function OurProducts() {
    

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetchDataFromFirestore().then(data => {
            setUserData(data);
        });
    }, []);

    const limitedUserData = userData.slice(0, 6);



    return (
        <div className="flex justify-center items-center pr-8 ml-8 mt-40  lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
            <div className="w-full xl:h-[1527px] bg-white/15  rounded-[26px] flex flex-col items-center">
                <h1 className="font-heavitas text-btn_hover text-4xl md:text-6xl lg:text-7xl xl:text-7xl mt-16">OUR PRODUCTS</h1>
                <p className="text-white text-center mt-4 px-4 max-w-xl font-aventa">
                    Experience the difference of quality. Soft, breathable, and beautiful  fabrics await at our store.
                </p>
                <div className="grid xl:grid-cols-[1fr_1fr_1fr] ml-32 mr-32 mt-16  items-center justify-center pb-6">
                {limitedUserData.map((user) => (
                    <Link href={`/product/${user.id}`} key={user.id} className=' border  xl:h-[500px] lg:h-[500px] md:h-[500px] h-[300px] border-gray_border text-white '>
                    <img src={user.Image} alt="Coming Soon" className="xl:h-[400px] lg:h-[400px] md:h-[400px] h-[200px] w-full rounded-[40px] p-4" />
                    <p className=' ml-4 text-2xl xl:text-4xl md:text-4xl lg:text-4xl mt-4 text-white font-heavitas font-semibold'>{user.Name}</p>
                    <p className="ml-4 font-ABeeZee">{user.CategoryID}</p>
                </Link>
            ))}
            </div>
            </div>

            
        </div>
    );
}
