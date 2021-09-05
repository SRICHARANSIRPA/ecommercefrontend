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
  const result = await fetch("http://localhost:3001/api/Products");
  let prodcuts = await result.json();
  prodcuts = [...prodcuts].map((p) => {
    const { _id: Id, ...otherProps } = p;
    console.log(Id);
    return { Id, count: 0, ...otherProps };
  });
  console.log(prodcuts);
  return prodcuts;
};
