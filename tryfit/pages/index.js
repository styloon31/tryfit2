import Header from "@/components/Header";
import FabricPerformance from "@/components/FabricPerformance";
import WhatWeDo from "@/components/WhatWeDo";
import OurProducts from "@/components/OurProducts";
import FaqSection from "@/components/FaqSection";
import SuccesStories from "@/components/SuccessStories";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


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

export default function Home() {
  
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchDataFromFirestore().then(data => {
      setUserData(data);
    });
  }, []);

  return (
    <div className="backgroundClass">
      <Header />
      <FabricPerformance />
      <WhatWeDo />
      <OurProducts />
      <FaqSection />
      <SuccesStories />
      <Connect />
      <Footer />
    </div>
  );
}