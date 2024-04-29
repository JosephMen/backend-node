const getCart = async () => {
  const data = await fetch('https://dummyjson.com/carts')
  return await data.json()
}

export default getCart
