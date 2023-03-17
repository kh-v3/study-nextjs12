import Layout from '../../components/layout';
import ProductsLayout from '../../components/productsLayout';
import type { NextPageWithLayout } from '../_app';
import Link from "next/link";
import {getProducts, Product} from "../../service/products";

type Props = {
  products: Product[];
};

const Products: NextPageWithLayout<Props> = ({ products }) => {
  return (
    <Layout>
      <ProductsLayout>
        <h1>제품 소개 페이지!</h1>
        <ul>
          {products.map(({ id, name }, index) => (
            <li key={index}>
              <Link href={`products/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </ProductsLayout>
    </Layout>
  );
}

export default Products;

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}