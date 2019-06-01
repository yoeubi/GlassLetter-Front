import routes from "./constant";
import axios from "axios";

export async function sendtext(source, target, text) {
  // target 은 전화번호

  const url = routes["send_message"];
  console.log(url);
  const result = await axios.post(url, {
    source: source,
    target: target,
    type: "text",
    text: text
  });
  return result;
}
// user.dataKey
export async function sendmultipart(source, target, formdata) {
  formdata.append("source", source);
  formdata.append("target", target);
  formdata.append("type", formdata.get("data").type);
  const url = routes["send_message"];
  console.log(url);
  const result = await axios.post(url, formdata);
  return result;
}


export async function getmessage(source){
    const url = routes['view_message']
    const result = await axios.get(url, {
     source : source
    });
    return result

}
