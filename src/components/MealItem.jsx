import { useState,useEffect } from 'react';
import Header from '../components/Header';
import { collection,getDocs} from "firebase/firestore";
import { db } from '../fire/firestore';
import Meal from '../components/Meal';
function Home(){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchFiredata(){
        const collRef = collection(db , 'Food');
        let meals = [];
        getDocs(collRef).then((snapShot) =>{
            snapShot.docs.forEach((doc) => {
            meals.push({ id: doc.id,...doc.data() });
            setData(meals)
        });
        }).catch((err) =>{
            console.log(err);
        });
        return meals;
    }
        async function fetchdata() {
            try {
                const newData = await fetchFiredata();
                setData(newData);
              } catch (error) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
            }
        fetchdata();
        console.log(data);
    
    },[]);
      
    return(
        <div >
        <Header/>
        {error && <p className='error'>{error}.</p>}
        {loading && <p className='loading'>Loading...</p>}
        {data && <Meal data={data} />}
        </ div>
    )
}
export default Home;