import type { ReactElement } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import { getSlugs } from '../../lib/api'
import posts from "../../posts.json"

export default function Post() {
  return (
    <div>This be a post</div>
  )
}

Post.getLayout = function getLayout(post: ReactElement) {
  return (
    <MainLayout>
      {post}
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  return {
    props : {
      posts
    }
  }
}

interface ISlug {
  slug : string
}

export const getStaticPaths = async () => {
  const data = await getSlugs();
 const paths = data.map(({slug} : ISlug ) => {
   return ({
     params : { slug }
   })
 })
  return {
    paths,
    fallback : false
  }
 };
 