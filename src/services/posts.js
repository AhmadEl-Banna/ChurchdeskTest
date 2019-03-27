export async function getPosts() {
  return await fetch(`https://jsonplaceholder.typicode.com/posts`)
}

export async function getPostById(postId) {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

export async function getCommentsOfPost(postId) {
  return await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
}

export default {
    getPosts,
    getPostById,
    getCommentsOfPost
}
