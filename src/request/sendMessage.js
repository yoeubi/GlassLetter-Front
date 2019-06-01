import routes from "./constant";
import axios from "axios";


async function sendtext(source,target,text){

  // target 은 전화번호

  const url = routes['send_message']
  console.log(url)
  const result = await axios.post(url, {
   source : source,
   target : target,
   type : "text",
   text : text
  });
  return result
}

export default sendtext
