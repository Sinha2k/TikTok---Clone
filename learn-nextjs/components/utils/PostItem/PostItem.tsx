import { useEffect, useRef, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import svgIcons from '../../../assets/svgIcons';
import { Video } from '../../../types';
import VideoTag from '../Video/Video';

interface postProp {
    post: Video;
}
const music = faMusic as IconProp;
const like = faHeart as IconProp;
const comment = faCommentDots as IconProp;
const share = faShare as IconProp;

const PostItem = ({ post }: postProp) => {
    const videoRef = useRef<HTMLVideoElement>(null!);
    const [playing, setPlaying] = useState(true);
    const [fav, setFav] = useState(false);
    // const [favCount, setFavCount] = useState();
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    return (
        <div className="post_card">
            <div style={{ backgroundImage: `url(${post.postedBy.avatar})` }} className="post_avatar"></div>
            <div className="post_body">
                <div className="post_header">
                    <div style={{ marginRight: '20px', width: '516px' }}>
                        <div className="post_postedBy">
                            <h3>{post.postedBy.title}</h3>
                            <h4>{post.postedBy.desc}</h4>
                        </div>
                        <span style={{ fontWeight: '400', marginTop: '3px' }}>{post.content}</span>
                        <Link href="/">
                            <div style={{ width: 'fit-content' }} className="music_background">
                                <FontAwesomeIcon
                                    style={{ marginRight: '10px', opacity: '0.8', width: '14px' }}
                                    icon={music}
                                />
                                <span style={{ fontWeight: '500' }}>nhạc nền - {post.postedBy.desc}</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="post_content">
                    <VideoTag id={post.id} src={post.video} videoRef={videoRef} />
                    {/* <video controls autoPlay loop ref={videoRef} src={post.video}></video> */}
                    <div className="post_function">
                        <div style={{ position: 'relative' }} className={`function_item ${fav ? 'active' : ''}`}>
                            {fav ? (
                                <div className="like_animation">
                                    <span style={{ '--i': 1 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 2 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 3 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 4 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 5 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 6 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 7 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 8 } as React.CSSProperties}></span>
                                    <span style={{ '--i': 9 } as React.CSSProperties}></span>
                                </div>
                            ) : (
                                ''
                            )}
                            <FontAwesomeIcon onClick={() => setFav(!fav)} className="fa_icons" icon={like} />
                            <strong>{post.like}M</strong>
                        </div>
                        <div className="function_item">
                            <FontAwesomeIcon className="fa_icons" icon={comment} />
                            <strong>{post.comment}M</strong>
                        </div>
                        <div className="function_item">
                            <Tippy
                                placement="top-start"
                                offset={[-30, 0]}
                                interactive={true}
                                render={(attrs) => (
                                    <div tabIndex={-1} {...attrs} className="share_popper">
                                        <PopperWrapper>
                                            <div className="share_item">
                                                <div style={{ paddingTop: '5px' }}>
                                                    <Image alt="" src={svgIcons.code} />
                                                </div>
                                                <span>Nhúng</span>
                                            </div>
                                            <div className="share_item">
                                                <div style={{ paddingTop: '5px' }}>
                                                    <Image alt="" src={svgIcons.sendToFriend} />
                                                </div>
                                                <span>Gửi đến bạn bè</span>
                                            </div>
                                            <div className="share_item">
                                                <div style={{ paddingTop: '5px' }}>
                                                    <Image alt="" src={svgIcons.facebook} />
                                                </div>
                                                <span>Chia sẻ với Facebook</span>
                                            </div>
                                            <div className="share_item">
                                                <div style={{ paddingTop: '5px' }}>
                                                    <Image alt="" src={svgIcons.whatsApp} />
                                                </div>
                                                <span>Chia sẻ với WhatsApp</span>
                                            </div>
                                            <div className="share_item">
                                                <div style={{ paddingTop: '5px' }}>
                                                    <Image alt="" src={svgIcons.link} />
                                                </div>
                                                <span>Sao chép liên kết</span>
                                            </div>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div>
                                    <FontAwesomeIcon className="fa_icons" icon={share} />
                                </div>
                            </Tippy>
                            <strong>{post.share}M</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const useElementOnScreen = (options: any, targetRef: any) => {
    const [isVisibile, setIsVisible] = useState();
    const callbackFunction = (entries: any) => {
        const [entry] = entries; //const entry = entries[0]
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisibile;
};

export default PostItem;
