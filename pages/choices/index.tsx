import Head from "next/head";

import styles from "../../styles/Choices.module.css";

import { getAllPosts, getImage } from "../../lib/api";

import { IPost } from "../../types/apiTypes";

import { useRouter } from "next/router"
import Link from 'next/link';

import * as React from 'react';

interface IPostProp {
  post: IPost;
}

const ExamplePost = ({
  post: {
    title,
    description,
    image,
    headline,
    address,
    ratings,
    outlets,
    food,
    tables,
    chairs,
    ambience,
    cost,
  },
}: IPostProp) => {
  const router = useRouter();

  return (
    <div className={styles.choicesContainer} onClick={() => router.push('choices/examplePost')}>
      <div className={styles.thumbnail}>
        <img src={`${image}.png`} alt={title}/>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Choices = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Choices</title>
      </Head>
      <div className={styles.container}>
        {posts.map((post: any, idx: any) => (
          <ExamplePost post={post} key={idx}/>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Choices;
