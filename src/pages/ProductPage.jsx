import Product from "../components/Product"
import { useParams } from "react-router";


function ProductPage() {
  const { id } = useParams();

  return (
	<Product id={id} />
  )
}

export default ProductPage