import Link from 'next/link';
import React from 'react';
import { Notification } from '../../../types';

export interface INotifiItem {
    notification: Notification;
}

export default function NotiItem({ notification }: INotifiItem) {
    return (
        <div className="noti_item">
            <div style={{ backgroundImage: `url(${notification.postedBy.avatar})` }} className="noti_avatar"></div>
            <div className="noti_body">
                <Link href="/">{notification.postedBy.title}</Link>
                {notification.category === 'follow' ? (
                    <p style={{ fontWeight: '400' }}>
                        follow bạn.<span> 1-19</span>
                    </p>
                ) : notification.category === 'comment' ? (
                    <p style={{ color: 'black' }}>
                        đã trả lời bình luận của bạn: <br />
                        {notification.content}
                        <span> 1-19</span>
                    </p>
                ) : (
                    <p style={{ color: 'black' }}>
                        đã nhắc đến bạn trong một bình luận: @{notification.content}
                        <span> 1-19</span>
                    </p>
                )}
            </div>
            <div className="noti_footer">
                {notification.category === 'follow' ? (
                    <button>Follow lại</button>
                ) : (
                    <div style={{ backgroundImage: `url(${notification.cropImage})` }} className="crop_image"></div>
                )}
            </div>
        </div>
    );
}
