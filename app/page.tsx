
import RenderPost from '../components/RenderPost';
import Link from 'next/link';
import getPostMetadata from '../components/getPostMetadata';
import getPostContent from '../components/getPostContent';

const HomePage = () => {
  const posts = getPostMetadata();
  const topPosts = posts.slice(0, 3);

  const postPreview = topPosts.map((p) => {
    const post = getPostContent(p.slug);
    return (
      <div key={p.slug}>
        <RenderPost post={post} slug={p.slug} />
        <div className='flex justify-center my-10 mb-0'>
        </div>
      </div>
    );
  });

  return (
    <div className='zero'>
      <article className='prose'>
        <h1 className='zero'>Recent Entries</h1>
        <h3 className='zero'>What I've written to the vault lately {'✍️'}</h3>
      </article>
      {/* <div className='grid grid-cols'> */}
        {postPreview}
        <a href='/vault' className='prose mt-0 underline'>
          to the Vault {'->'}
        </a>
      {/* </div> */}

    </div>
  );
};

export default HomePage;