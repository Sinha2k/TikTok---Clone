import * as React from 'react';
import { Comment } from '../../../types';
import { Wrapper as PopperWrapper } from '../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tippy from '@tippyjs/react/headless';

export interface ICommentItemProps {
    comment: Comment;
    author: string;
}

const more = faEllipsis as IconProp;
const heart = faHeart as IconProp;
const flag = faFontAwesome as IconProp;

export default function CommentItem({ comment, author }: ICommentItemProps) {
    return (
        <div className="comment_card">
            <div style={{ backgroundImage: `url(${comment?.postedBy.avatar})` }} className="comment_avatar"></div>
            <div className="comment_body">
                <div className="comment_author">
                    <span>{comment?.postedBy.desc}</span>
                    {comment?.postedBy.desc === author ? <span>Tác giả</span> : <span></span>}
                </div>
                <p>{comment?.comment}</p>
                <div className="comment_createdAt">
                    <span>19 giờ trước</span>
                    <span style={{ cursor: 'pointer' }}>Trả lời</span>
                </div>
            </div>
            <div className="comment_function">
                <Tippy
                    interactive={true}
                    offset={[20, 0]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div {...attrs} tabIndex={-1} className="comment_report">
                            <PopperWrapper>
                                <div style={{ color: '#161823', fontSize: '18px' }}>
                                    <FontAwesomeIcon style={{ width: '15px', height: '15px' }} icon={flag} />
                                    <span style={{ fontSize: '16px', cursor: 'pointer' }}>Báo cáo</span>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className="comment_icon">
                        <FontAwesomeIcon style={{ width: '20px' }} icon={more} />
                    </div>
                </Tippy>
                <div className="comment_icon">
                    <FontAwesomeIcon style={{ width: '15px', height: '15px' }} icon={heart} />
                </div>
                <span>{comment?.likes}</span>
            </div>
        </div>
    );
}
