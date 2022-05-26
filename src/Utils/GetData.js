// export const url = "https://techfirst-pt.herokuapp.com/champions";
export const url =
  "https://us-central1-mbtcandidate.cloudfunctions.net/posts/cgarcia/";

export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.response;
  } catch (error) {
    return console.log(error);
  }
};
