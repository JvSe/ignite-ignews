import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(props) {
    return(
        <>
            <Head>
                <title> Posts | Ignews </title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>26 de maio de 2020</time>
                        <strong>Generating RPG Tethered Assets: Phase 2 of Development</strong>
                        <p>Since the inception of Revolve Games we’ve set out to build a gaming ecosystem on a solid DeFi economy. One of our main focuses is bringing new innovation into the ever blossoming GameFi landscape.</p>
                    </a>
                    <a href='#'>
                        <time>26 de maio de 2020</time>
                        <strong>Generating RPG Tethered Assets: Phase 2 of Development</strong>
                        <p>Since the inception of Revolve Games we’ve set out to build a gaming ecosystem on a solid DeFi economy. One of our main focuses is bringing new innovation into the ever blossoming GameFi landscape.</p>
                    </a>
                    <a href='#'>
                        <time>26 de maio de 2020</time>
                        <strong>Generating RPG Tethered Assets: Phase 2 of Development</strong>
                        <p>Since the inception of Revolve Games we’ve set out to build a gaming ecosystem on a solid DeFi economy. One of our main focuses is bringing new innovation into the ever blossoming GameFi landscape.</p>
                    </a>
                </div>
            </main>
        </>
    )
};

// export const getStaticProps: GetStaticProps = async ({ previewData }) => {
//     const client = createClient({ previewData });

//     const page = await client.getAllByType("Post");
//     console.log('to aqui');
//     console.log(page);
//     return {
//         props: { page }
//     }
// }