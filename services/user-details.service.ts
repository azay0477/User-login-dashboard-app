// import { store } from "../store/store";
// import Types from "../store/types";
// import * as contentful from "contentful";

// const client = contentful.createClient({
//   space: '7wkrb42vop17',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: 'jprKyW_rdy9Fn08Hg3rB16JsY4LYU4AiJb6otHwC59c'
// })

// client.getEntry('1cFw6sYP8Uxt6d0WKottbW')
//   .then((entry) => console.log(entry))
//   .catch(console.error)

// export const sendUserDetails = async (data: any) => {
//   await fetch(
//     "https://user-details-ca90a-default-rtdb.firebaseio.com/userDetailInfo.json",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ data }),
//     }
//   );
// };

// export const getUserDetails = async () => {
//   await fetch(
//     "https://user-details-ca90a-default-rtdb.firebaseio.com/userDetailInfo.json",
//     {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     }
//   )
//     .then((res) => res.json())
//     .then((res1) => {
//       store.dispatch({ type: Types.USER_DETAILS, payload: res1 });
//     });
// };
