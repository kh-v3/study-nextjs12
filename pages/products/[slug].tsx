import { useRouter } from 'next/router'
import Layout from "../../components/layout";
import ProductsLayout from "../../components/productsLayout";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import {getProducts, Product} from "../../service/products";

type Props = {
  products: Product[];
};

export default function Pants({ products }: Props) {
  console.log('static props : ', products);
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Head>
        <title>nextjs12 | {slug}</title>
        <meta property="og:title" content="nextjs12 product" key="title" />
      </Head>
      <ProductsLayout>
        <h1>{slug}!! in pages</h1>
      </ProductsLayout>
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { slug: product.id }
  }));

  return {
    paths: paths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: any) {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 5,
  }
}