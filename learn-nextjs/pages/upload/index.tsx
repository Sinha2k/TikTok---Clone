import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import svgIcons from '../../assets/svgIcons';
import Navbar from '../../components/Navbar/Navbar';

export interface IUploadPageProps {}

const caretDown = faCaretDown as IconProp;

export default function UploadPage(props: IUploadPageProps) {
    const [note, setNote] = useState('');
    const [privateSeen, setPrivateSeen] = useState('Công khai');
    const [toggle, setToggle] = useState(false);
    const [check, setCheck] = useState(false);
    return (
        <>
            <Head>
                <title>Tải lên | TikTok</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                ></link>
            </Head>
            <Navbar style={{ paddingRight: '20px' }} />
            <div className="upload_page">
                <div className="upload_container">
                    <span>Tải video lên</span>
                    <span>Đăng video vào tài khoản của bạn</span>
                    <div className="upload_content">
                        <div className="uploader">
                            <input accept="mp4/webm" type="file" />
                            <div className="uploader_card">
                                <div style={{ width: '40px', height: '29px' }} className="uploader_logo">
                                    <Image alt="" src={svgIcons.upload_logo} />
                                </div>
                                <span>Chọn video để tải lên</span>
                                <span>Hoặc kéo và thả tệp tin</span>
                                <span>
                                    MP4 hoặc WebM
                                    <br />
                                    <br />
                                    Độ phân giải 720x1280 trở lên
                                    <br />
                                    <br />
                                    Tối đa 10 phút
                                    <br />
                                    <br />
                                    Ít hơn 2 GB
                                </span>
                                <button>Chọn tập tin</button>
                            </div>
                        </div>
                        <div className="upload_form">
                            <div className="note">
                                <h6>
                                    Chú thích
                                    <span
                                        style={{
                                            color: `${
                                                note.length === 150 ? 'rgba(234, 40, 78, 1)' : 'rgba(22, 24, 35, 0.5)'
                                            }`,
                                        }}
                                    >
                                        {note.length} / 150
                                    </span>
                                </h6>
                                <div className="note_input">
                                    <input
                                        onChange={(e) => {
                                            if (e.target.value.length <= 150) {
                                                setNote(e.target.value);
                                            }
                                        }}
                                        value={note}
                                        type="text"
                                    />
                                    <h6 onClick={() => setNote('@')} style={{ right: '40px' }}>
                                        @
                                    </h6>
                                    <h6 onClick={() => setNote('#')}>#</h6>
                                </div>
                            </div>
                            <div className="image_cover">
                                <h6>Ảnh bìa</h6>
                                <div className="image_cover_field">
                                    <div className="cover_empty_wrap">
                                        <div className="cover_empty_candidate"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="private_seen">
                                <h6>Ai có thể xem video này</h6>
                                <div
                                    onClick={() => setToggle(!toggle)}
                                    className={`private_input ${toggle ? 'animation' : 'animation_back'}`}
                                >
                                    <input value={privateSeen} type="text" readOnly />
                                    <FontAwesomeIcon icon={caretDown} />
                                </div>
                                {toggle ? (
                                    <ul>
                                        <li
                                            style={{
                                                backgroundColor: `${
                                                    privateSeen === 'Công khai' ? 'rgba(22, 24, 35, 0.06)' : ''
                                                }`,
                                            }}
                                            onClick={() => {
                                                setPrivateSeen('Công khai');
                                                setToggle(false);
                                            }}
                                        >
                                            Công khai
                                        </li>
                                        <li
                                            style={{
                                                backgroundColor: `${
                                                    privateSeen === 'Bạn bè' ? 'rgba(22, 24, 35, 0.06)' : ''
                                                }`,
                                            }}
                                            onClick={() => {
                                                setPrivateSeen('Bạn bè');
                                                setToggle(false);
                                            }}
                                        >
                                            Bạn bè
                                        </li>
                                        <li
                                            style={{
                                                backgroundColor: `${
                                                    privateSeen === 'Riêng tư' ? 'rgba(22, 24, 35, 0.06)' : ''
                                                }`,
                                            }}
                                            onClick={() => {
                                                setPrivateSeen('Riêng tư');
                                                setToggle(false);
                                            }}
                                        >
                                            Riêng tư
                                        </li>
                                    </ul>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="private_action">
                                <h6>Cho phép người dùng</h6>
                                <div style={{ display: 'flex', marginBottom: '24px' }}>
                                    <div className="wrapper_checkbox">
                                        <input type="checkbox" />
                                        <label htmlFor="check">Bình luận</label>
                                    </div>
                                    <div className="wrapper_checkbox">
                                        <input type="checkbox" />
                                        <label htmlFor="check">Duet</label>
                                    </div>
                                    <div className="wrapper_checkbox">
                                        <input type="checkbox" />
                                        <label htmlFor="check">Stitch</label>
                                    </div>
                                </div>
                            </div>
                            <div className="private_seen">
                                <div className="check_copyright">
                                    <h6 style={{ marginBottom: '4px' }}>Chạy quy trình kiểm tra bản quyền</h6>
                                    <input onChange={(e) => setCheck(e.target.checked)} type="checkbox" />
                                </div>
                                {check ? (
                                    <div className="attention">
                                        <div style={{ marginTop: '2px' }} className="notice">
                                            <Image src={svgIcons.notice} alt="" />
                                        </div>
                                        <span>Kiểm tra bản quyền chỉ bắt đầu sau khi bạn tải video của mình lên.</span>
                                    </div>
                                ) : (
                                    <span>
                                        Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi phạm bản quyền
                                        hay không. Nếu chúng tôi phát hiện có vi phạm, bạn có thể chỉnh sửa video trước
                                        khi đăng.<strong style={{ cursor: 'pointer' }}>Tìm hiểu thêm</strong>
                                    </span>
                                )}
                            </div>
                            <div className="upload_button">
                                <button>Hủy bỏ</button>
                                <button>Đăng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
