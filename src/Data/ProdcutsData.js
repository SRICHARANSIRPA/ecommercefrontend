export const getProducts = async () => {
  //   fetch("http://localhost:3000/getData")
  //     .then((result) => result.json())
  //     .then((json) => {
  //       console.log(json);
  //       return json;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return [];
  //     });
  const result = await fetch("http://localhost:3000/getData");
  const prodcuts = await result.json();
  return prodcuts;
};
