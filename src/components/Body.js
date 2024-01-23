import { useEffect, useState } from "react";
import Movicard from "./MoviCard";

const Body = () => {
  const [allMovi , setAllMovi] = useState([]);

  
  console.log(allMovi);
  useEffect(() =>{
    getMovi();
  },[])
  
  async function getMovi() {
    const data = await fetch("https://api.mxplayer.in/v1/web/home/tab/87c3ddc974dcf12294e9412bec44b097?device-density=2&userid=f804646f-c6ab-4175-a818-f2e9f7c352be&platform=com.mxplay.desktop&content-languages=hi,en&pageSize=2&kids-mode-enabled=false")
    const json = await data.json();
    
    setAllMovi(json?.sections[0]?.items);
    //setImg(json?.sections[0]?.items?.imageInfo[2]?.url);
    //console.log(json?.sections[0]?.items);
    
  };
  return (
    <div className="flex flex-wrap">
      {allMovi.map((movi) => {
        const imageURL = movi?.imageInfo[2]?.url;

        return <Movicard {...movi} imageURL={imageURL} key={movi.id}  />;
      })}
    </div>
  );
};

export default Body;
