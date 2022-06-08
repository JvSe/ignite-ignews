import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';
import { createClient } from '../../../prismicio';
import { asText } from '@prismicio/helpers';

type PostType = {
    slug: string;
    title: string;
    resume: string;
    updateAp: string;
}
interface PostsProps {
    posts: PostType[]
}

export default function Posts({ posts }: PostsProps) {
    return(
        <>
            <Head>
                <title> Posts | Ignews </title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <a key={post.slug} href='#'>
                            <time>{post.updateAp}</time>
                            <strong>{post.title}</strong>
                            <p>{post.resume}</p>
                        </a>
                    ))}
                </div>
            </main>
        </>
    )
};


export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const response = await client.getAllByType('ignewsPosts')
//   console.log("data => ", JSON.stringify(response, null, 2));

  const posts = response.map( post => {
      console.log("post.data.Title =>", post.data.Title );
      return {
        slug: post.uid,
        title: asText(post.data.Title),
        resume: post.data.Content.find(content => content.type === 'paragraph')?.text ?? '', // ? essas interrogações funcionam como um if ternario, ou seja, so vai pegar o atributo 'text' se o find não retornar undefinied
        updateAp: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }
  })

  return {
    props: { posts }, // Will be passed to the page component as props
  }
}