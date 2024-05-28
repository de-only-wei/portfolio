import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

const RenderPost = ({ post, prev, next, slug }: any) => {
  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          language={match[1]}
          customStyle={{ border: 'none' }}
          PreTag='div'
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    p: ({ node, children }: any) => {
      if (node.children[0].tagName === 'img') {
        const image: any = node.children[0];
        return (
          <div className='text-center'>
            <Image
              src={`${image.properties.src}`}
              alt={image.properties.alt}
              width='800'
              height='500'
            />
            <p className='text-gray-400 mt-0'>{image.properties.alt}</p>
          </div>
        );
      }
      return <p>{children}</p>;
    },
  };
  return (
    <div>
      <div
        key={post.data.title}
        className='section border-2 rounded-xl p-5'>
        {slug ? (
          <Link href={`/vault/${slug}`}>
            <div className='prose mt-10 mb-10 text-center'>
              <h1 className='font-bold text-2xl'>
                {post.data.title}
              </h1>
              </div>
          </Link>
        ) : (
          <Link href={''}>
            <div className='section prose mt-10 mb-10 text-center'>
              <h1 className='font-bold text-2xl'>
                {post.data.title}
              </h1>
              </div>
          </Link>
        )}
        <article className='prose mb-10'>
          <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </article>
        <div className='prose'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center gap-3'>
              {post.data.tags.split(', ').map((tag: any) => (
                // href={`/tags/${tag}`} //TODO:Need to implement tags
                <p className='zero'>
                  <a href={``} key={tag} className='prose section border-2 rounded'> #{tag} </a>
                </p>
              ))}
            </div>
            {new Date(post.data.date).toLocaleDateString()}
            <br></br>
          </div>
        </div>
        <div className='flex flex-col mt-5'>
          {next && (
            <div className='flex prose items-center'>
              <Link href={`/vault/${next.slug}`} className='ml-1 underline'>
                {'⬅️ '}{next.title}
              </Link>
            </div>
          )}
          {prev && (
            <div className='flex prose items-center'>
              <Link href={`/vault/${prev.slug}`}>
                <p className='ml-1 underline'></p>{prev.title} {' ➡️'}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default RenderPost;
