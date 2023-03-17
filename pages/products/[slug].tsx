import { useRouter } from 'next/router'
import Layout from "../../components/layout";
import ProductsLayout from "../../components/productsLayout";
import Link from "next/link";
import Head from "next/head";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function Pants(params: any) {
  console.log(params);
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
  const products = ['pants', 'skirt'];
  const paths = products.map((product) => ({
    params: { slug: product }
  }));

  return {
    paths: paths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: { staticProps: {} },
  }
}