import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://vladyslavbielievtsov.ghost.io',
  key: 'a8f34a4dba6c789c3c3ae36847',
  version: "v2"
})

export async function getPosts() {
  return await api.posts
    .browse({
        limit: "all",
        include: "tags,authors"
    })
    .catch(err => {
        console.error(err);
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
        slug: postSlug
    })
    .catch(err => {
        console.error(err);
    })
}

export async function getPage(pageSlug) {
  return await api.pages
    .read({
        slug: pageSlug
    })
    .catch(err => {
        console.error(err);
    })
}