
import Link from 'next/link';
import { PostMetadata } from './PostMetadata';

const PostPreview = (props: PostMetadata) => {
  return (
    <span>
    <li className='zero'><Link href={`/vault/${props.slug}`}>
        <div className='flex justify-between items-center hover:underline'>
        {props.title} <p className='zero'>{props.date}</p>
        </div>
      </Link>
    </li>
    </span>
  );
};
export default PostPreview;
