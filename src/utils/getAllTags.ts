import { getCollection } from "astro:content";

export async function getAllTags() {
    const posts = await getCollection('blog')

    // const tags = posts.map(post => post.data.tags)
    // hago un set para aplanar el objeto (es como fusionar todo en un objeto) y eliminar duplicados
    return Array.from(
        new Set(
            posts.map(post => post.data.tags).flat().sort()
        )
    )
}