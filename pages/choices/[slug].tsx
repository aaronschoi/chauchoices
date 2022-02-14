import type { ReactElement } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'

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