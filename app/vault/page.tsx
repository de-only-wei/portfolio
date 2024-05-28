import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/PostPreview';
import Link from 'next/link';

const VaultPage = () => {
    const postMetadata = getPostMetadata();

    let totalWordCount = 0;
    const totalBlogs = postMetadata.length;

    const postPreviews = postMetadata.map((post) => {
        totalWordCount += post.wordcount;
        return <PostPreview key={post.slug} {...post} />;
    });

    return (
        <div>
            <article className='prose'>
                <h1> Vault</h1>
                <h3>A repository for my blog entries {'🔒'}</h3>
            </article>
            <ul className='prose list-disc ml-3'>{postPreviews}</ul>
            <p className = 'prose mt-10'>Stats: {' [ '}{totalBlogs} blogs :: {new Intl.NumberFormat().format(totalWordCount)}{' '}words{' ]'}</p>
        </div >
    );
};

export default VaultPage;