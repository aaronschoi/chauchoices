import Head from "next/head";

import styles from "../../styles/Choices.module.css";

import { IPost } from "../../types/apiTypes";

interface IPostProp {
  post: IPost;
}

// const ExamplePost = ({
//   post: {
//     title,
//     description,
//     headline,
//     address,
//     ratings,
//     outlets,
//     food,
//     tables,
//     chairs,
//     ambience,
//     cost,
//   },
// }: IPostProp) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

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

export default Choices;
