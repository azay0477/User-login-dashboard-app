import * as contentful from "contentful";


export const getChartData = async () => {
  const client = contentful.createClient({
    space: "7wkrb42vop17",
    environment: "master", // defaults to 'master' if not set
    accessToken: "jprKyW_rdy9Fn08Hg3rB16JsY4LYU4AiJb6otHwC59c",
  });


  return await client.getEntry("1r3NzUntRgufduvDoXj0hY");
}