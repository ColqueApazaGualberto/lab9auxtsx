
(async () => {
  const randomProductId = Math.floor(Math.random() * 100) + 1;

  const url = `https://dummyjson.com/products/${randomProductId}`;

  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
})();
