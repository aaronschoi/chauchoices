import Head from "next/head";

import styles from "../../styles/Choices.module.css";

import { getAllPosts } from "../../lib/api";

import { IPost } from "../../types/apiTypes";

interface IPostProp {
  post: IPost;
}

const ExamplePost = ({
  post: {
    title,
    description,
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
  return (
    <div className={styles.container}>
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
        {posts.map((post: any) => (
          <ExamplePost post={post} />
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
