import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import Header from '@/components/Header';

export default function ProductPage() {
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState(null);
    const desc = "Unique Description"
    useEffect(() => {
        const fetchProduct = async () => {
            if (productId) {
                try {
                    const productRef = doc(db, "Products", productId);
                    const docSnapshot = await getDoc(productRef);
                    
                    if (docSnapshot.exists()) {
                        setProduct(docSnapshot.data());
                    } else {
                        console.log('No such document!');
                    }
                } catch (error) {
                    console.log('Error getting document:', error);
                }
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div className='text-white'>Loading...</div>;
    }

    return (
        <div className='w-full h-full text-white'>
            <Header />
            <div className='grid grid-cols-[1fr_1fr]'>
                <div className=' w-[500px] mt-40 ml-[400px] rounded-[18px] bg-[#D9D9D9]'>
                        <img src={product.Image} alt="Coming Soon" className="h-[500px] w-full rounded-[40px] p-4" />
                </div>
                <div className=' mt-44'>
                    <h1 className='flex text-8xl font-ABeeZee'>{product.Name}</h1>
                    <div className='flex gap-4 text-3xl ml-3'>
                        <h2>Type Of Fabric :</h2>
                        <h2 className='text-btn_hover font-aventa'>{product.CategoryID}</h2>
                    </div>
                    <p className=' font-ABeeZee mt-[45px] w-[550px]'>{product.Unique_Description}</p>
                    <div className='text-white text-[24px] font-aventa_bold mt-8 flex gap-4'>
                        <h2 className=''>Item Composition :</h2>
                        <h2 className='text-btn_hover'>{product.Item_Composition}</h2>
                    </div>
                    <button className='bg-[#D9D9D9] text-[40px] py-2 mt-12 text-black font-aventa_bold px-24 rounded-[10px]'>Get Quotation</button>
                </div>
            </div>
            
        </div>
    );
}
