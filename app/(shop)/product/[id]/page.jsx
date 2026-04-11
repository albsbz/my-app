import Product from "@components/Product"

async function ProductPage({params}) {
  const { id }  = await params

  return (
	<Product id={id} />
  )
}

export default  ProductPage