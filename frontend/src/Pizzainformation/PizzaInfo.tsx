import { useEffect } from "react"
import ApiRequest from "../ApiRequest/Apirequest"

const PizzaInfo = () => {
    const API_URL = 'http://localhost:5900/PizzaInfo'
    useEffect(()=>{
        const Fetchfunction = async()=>{
          try
          {
            const ApprovedData = await ApiRequest(API_URL,"GET");
            console.log(ApprovedData);
          }
          catch(err)
          {
            console.log(err);
          }
        }
        (async()=> await Fetchfunction())()
      },)

  return (
    <div>PizzaInfo</div>
  )
}

export default PizzaInfo