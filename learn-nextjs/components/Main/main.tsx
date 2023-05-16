import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PostItem from '../utils/PostItem/PostItem';
import { posts } from '../../data/post';

const Main: NextPage = () => {
    return (
        <div className="main_container">
            {posts.map((item) => {
                return <PostItem key={item.id} post={item} />;
            })}
        </div>
    );
};
export default Main;
