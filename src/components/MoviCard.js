import { IMG_CDN } from "../config";

const Movicard = ({
  imageURL,
  title,
  description,
  
}) =>{
  return(
    <div className="w-56 p-2 m-2 shadow-lg ">
      <img src={IMG_CDN + imageURL} />
      <h2 className="font-bold text-xl">{title}</h2>
      <h3>{description}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
    </div>
  )
};

export default Movicard;