import { usePathname, useSearchParams } from "next/navigation";
import Button from "./Button";
import ProductListItem from "./ProductListItem";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductContext from "@/app/_context/ProductContext";
import Link from "next/link";

function ProductsList({ products }) {
  const perPage = 12;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const nextPageHandler = () => {
    router.push(`${pathname}?page=${page + 1}`);
    setPage(page + 1);
  };
  const prevPageHandler = () => {
    if (page > 1) {
      router.push(`${pathname}?page=${page - 1}`);
      setPage(page - 1);
    }
  };
  useEffect(() => {
    setPage(parseInt(searchParams.get("page")) || 1);
  }, [searchParams, pathname]);
  const productsToDisplay = useMemo(() => {
    return products.slice((page - 1) * perPage, page * perPage);
  }, [products, page]);

  const numberOfPages = useMemo(
    () => Math.ceil(products.length / perPage),
    [products],
  );

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsToDisplay.map((product) => (
            <ProductListItem product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <Button
          text="Prev"
          className="mt-6 mr-4"
          handler={prevPageHandler}
          disabled={page === 1}
        />
        {Array.from({ length: numberOfPages }).map((_, index) => (
          <Link key={index} href={`${pathname}?page=${index + 1}`}>
            <Button
              text={index + 1}
              className="mx-1 bg-white-100 text-black"
              disabled={page === index + 1}
              handler={() => setPage(index + 1)}
              styles="mx-1 bg-white-100 text-black"
            />
          </Link>
        ))}
        <Button
          text="Next"
          className="mt-6 ml-4"
          disabled={page >= numberOfPages}
          handler={nextPageHandler}
        />
      </div>
    </div>
  );
}

export default ProductsList;
