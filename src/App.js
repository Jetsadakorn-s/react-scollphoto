import { useEffect, useState } from 'react';
import './App.css';
import PhotoComponent from './component/PhotoComponent';


function App() {
  const apiKey = `xk0rQCrVnf5KGcOeetytouJzA85K_iO3rqZf7ExAW_k`
  const apiURL = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=1`

  const [photos,setPhotos] = useState([])

  const fetchImage=async()=>{
    const response = await fetch(apiURL)
    const data = response.json()
    setPhotos(data)
  }

  useEffect(()=>{
    fetchImage()
  },[])
  return (
    <main>
      <h1>Infinite Scroll Photo | Unsplash API</h1>
      <section className='photos'>
        <div className="display-photo"> 
          {photos.map((data,index)=>{
            return <PhotoComponent key={index} {...data}/>
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
