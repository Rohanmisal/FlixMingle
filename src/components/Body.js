import { Movicard } from "../config";
import { IMG_CDN } from "../config";

const RestrauntCard = ({
  url,
  title,
  description,
  
}) =>{
  return(
    <div className="w-56 p-2 m-2 shadow-lg ">
      <img src={IMG_CDN + url} />
      <h2 className="font-bold text-xl">{title}</h2>
      <h3>{description}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
    </div>
  )
};
console.log(Movicard);
const Body = () =>{
  return(
    <div className="flex flex-wrap">

      {Movicard.map((movi)=>{
        return (
          <RestrauntCard {...movi}/>
        )
      })}
    </div>
  )
}

export default Body;