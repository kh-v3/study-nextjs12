import Layout from '../../components/layout';
import ProductsLayout from '../../components/productsLayout';
import type { NextPageWithLayout } from '../_app';
import Link from "next/link";

const products = ['shirt', 'pants', 'skirt', 'shoes'];

const Products: NextPageWithLayout = () => {
  return (
    <Layout>
      <ProductsLayout>
        <h1>제품 소개 페이지!</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <Link href={`products/${product}`}>{product}</Link>
            </li>
          ))}
        </ul>
      </ProductsLayout>
    </Layout>
  );
}

export default Products;