import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { posts } from '../../data/post';
import { Video } from '../../types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faFontAwesome,
    faXmark,
    faMusic,
    faHeart,
    faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import svgIcons from '../../assets/svgIcons';
import Link from 'next/link';
import CommentItem from '../../components/utils/CommentItem';
import Head from 'next/head';

export interface DetailPostPageProps {
    postDetail: Video;
}

const close = faXmark as IconProp;
const flag = faFontAwesome as IconProp;
const up = faAngleUp as IconProp;
const down = faAngleDown as IconProp;
const music = faMusic as IconProp;
const like = faHeart as IconProp;
const comment = faCommentDots as IconProp;

export default function DetailPostPage({ postDetail }: DetailPostPageProps) {
    const router = useRouter();
    const [fav, setFav] = useState(false);
    const [inputValue, setInputValue] = useState('');
    var query = router.query;
    const [detailPost, setDetailPost] = useState(postDetail);

    useEffect(() => {
        if (posts) {
            posts.forEach((item) => {
                if (item.id === query.postId) {
                    setDetailPost(item);
                }
            });
        }
    });
    return (
        <>
            <Head>
                <title>TikTok chính thức của {detailPost && detailPost.postedBy.desc}</title>
            </Head>
            <div className="detail_post_page">
                <div className="left_part">
                    <div
                        style={{
                            backgroundImage: `url('https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/8091ad8ec2854aedb3673826751e84bb_1660651505?x-expires=1662120000&x-signature=1kAYSvU%2BY3o11KnUiB2Z1d2IaDs%3D')`,
                        }}
                        className="image_background"
                    ></div>
                    <video controls src={detailPost && detailPost.video}></video>
                    <Link href="/">
                        <div>
                            <FontAwesomeIcon className="left_part_icons" icon={close} />
                        </div>
                    </Link>
                    <div className="tiktok_icon">
                        <Image alt="" src={svgIcons.logo} />
                    </div>
                    <div className="report">
                        <FontAwesomeIcon className="left_part_icons" icon={flag} />
                        Báo cáo
                    </div>
                    <FontAwesomeIcon className="left_part_icons" icon={up} />
                    <FontAwesomeIcon className="left_part_icons" icon={down} />
                </div>
                <div className="right_part">
                    <div className="detail_header">
                        <div
                            style={{ backgroundImage: `url(${detailPost?.postedBy.avatar})` }}
                            className="detail_avatar"
                        ></div>
                        <div className="detail_postedBy">
                            <span>{detailPost?.postedBy.title}</span>
                            <span>{detailPost?.postedBy.desc}</span>
                        </div>
                        <div>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="detail_body">
                        <span className="detail_caption">{detailPost?.content}</span>
                        <div className="detail_music">
                            <FontAwesomeIcon
                                style={{ marginRight: '10px', opacity: '0.8', width: '14px' }}
                                icon={music}
                            />
                            <span style={{ fontWeight: '700' }}>nhạc nền - {detailPost?.postedBy.desc}</span>
                        </div>
                        <div className="function_link">
                            <div className="detail_function">
                                <div className="icon_left">
                                    <div style={{ marginRight: '20px' }} className="detail_icon_item">
                                        <FontAwesomeIcon
                                            onClick={() => setFav(!fav)}
                                            style={{ color: `${fav ? 'rgb(254, 44, 85)' : ''}` }}
                                            icon={like}
                                        />
                                        <strong>{detailPost?.like}M</strong>
                                    </div>
                                    <div className="detail_icon_item">
                                        <FontAwesomeIcon icon={comment} />
                                        <strong>{detailPost?.comment}M</strong>
                                    </div>
                                </div>
                                <div className="icon_right">
                                    <div style={{ marginRight: '8px', cursor: 'pointer' }}>
                                        <Image alt="" src={svgIcons.code} />
                                    </div>
                                    <div style={{ marginRight: '8px', cursor: 'pointer' }}>
                                        <Image alt="" src={svgIcons.sendToFriend} />
                                    </div>
                                    <div style={{ marginRight: '8px', cursor: 'pointer' }}>
                                        <Image alt="" src={svgIcons.facebook} />
                                    </div>
                                    <div style={{ marginRight: '8px', cursor: 'pointer' }}>
                                        <Image alt="" src={svgIcons.whatsApp} />
                                    </div>
                                    <div style={{ marginRight: '8px', cursor: 'pointer' }}>
                                        <Image alt="" src={svgIcons.link} />
                                    </div>
                                </div>
                            </div>
                            <div className="detail_link">
                                <p>https://www.tiktok.com/@hoaa.hanassii/video7...</p>
                                <button>Sao chép liên kết</button>
                            </div>
                        </div>
                    </div>
                    <div className="detail_comments">
                        {detailPost?.comments?.map((item) => {
                            return <CommentItem author={detailPost?.postedBy.desc} key={item._id} comment={item} />;
                        })}
                    </div>
                    <div className={`comment_input ${inputValue.length > 0 ? 'button_active' : ''}`}>
                        <div className="input_icons">
                            <input onChange={(e) => setInputValue(e.target.value)} placeholder="Thêm bình luận..." />
                            <div style={{ marginLeft: '10px' }} className="comment_icon">
                                <Image style={{ cursor: 'pointer' }} alt="" src={svgIcons.tag} />
                            </div>
                            <div className="comment_icon">
                                <Image style={{ cursor: 'pointer' }} alt="" src={svgIcons.emoji} />
                            </div>
                        </div>
                        <span>Đăng</span>
                    </div>
                </div>
            </div>
        </>
    );
}
