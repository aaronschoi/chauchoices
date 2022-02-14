import Head from "next/head";

import styles from "../../styles/Choices.module.css";

import { getAllPosts } from "../../lib/api";

const ExamplePost = ({ post: { title, body } }: any) => {
  return (
    <div className={styles.choice_container}>
      <div className={styles.placeholder}></div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
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
      <div>
        {posts.map((post: any) => (
          <ExamplePost post={post} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Choices;
