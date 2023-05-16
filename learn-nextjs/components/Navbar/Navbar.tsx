import Image from 'next/image';
import Link from 'next/link';
import tiktok1 from '../../assets/tiktok_1.png';
import tiktok2 from '../../assets/tiktok_2.png';
import svgIcons from '../../assets/svgIcons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tippy from '@tippyjs/react/headless';
import TippyTooltip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '../utils/Popper';
import { useState } from 'react';
import NotiItem from '../utils/NotificationItem/NotiItem';
import { account } from '../../data/account';

interface navbarProps {
    style: object;
}

const circleXmark = faCircleXmark as IconProp;
const magnifyingGlass = faMagnifyingGlass as IconProp;
const plus = faPlus as IconProp;
const spinner = faSpinner as IconProp;
const Navbar = ({ style }: navbarProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [spin, setSpin] = useState(true);
    const [option, setOption] = useState('');
    const [notiOption, setNotiOption] = useState('All activities');
    const accountData = account;

    const notifications = [
        // {
        //     id: '4',
        //     category: 'follow',
        //     content: '',
        //     cropImage: '',
        //     postedBy: {
        //         avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/581a66e3fe5e04ea5a806b9dc13f95b8~c5_100x100.jpeg?x-expires=1661335200&x-signature=dZV4WoSKmJipGPuRALz3B8GLyI4%3D',
        //         title: 'enth.iuy',
        //         desc: '😘😘😘Uyên💕💕💕',
        //     },
        // },
        {
            id: '0',
            category: 'follow',
            content: '',
            cropImage: '',
            postedBy: {
                avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662256800&x-signature=cEcAWM1GwHbqFjQBr5zlJUluZpQ%3D',
                title: 'hoaa.hanassii',
                desc: 'Đào Lê Phương Hoa',
            },
        },
        {
            id: '1',
            category: 'follow',
            content: '',
            cropImage: '',
            postedBy: {
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/793a1ca9be08d7e76eec11049e86ec51.jpeg?x-expires=1662256800&x-signature=Mf3PM2m5m440ttW7SrJ5n%2BOhlds%3D',
                title: 'neyunn1',
                desc: 'neyun',
            },
        },
        {
            id: '2',
            category: 'comment',
            content: '😁',
            cropImage:
                'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/22413838e05841c9b46a844e72e9cfd5?x-expires=1661353200&x-signature=NjhYmuJPZ%2F6JpBWXrtZADakaMKc%3D',
            postedBy: {
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1600717367664642.jpeg?x-expires=1662256800&x-signature=%2Bhok0zVCskLDDGhK3THr3WQ0%2B44%3D',
                title: 'chisu10',
                desc: 'Chi Su',
            },
        },
        {
            id: '3',
            category: 'tag',
            content: 'sinha2k cắt đi',
            cropImage:
                'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/1f616395c3aa4fe7ae97d64f483241ca_1636971108?x-expires=1661353200&x-signature=VaH5tB%2BzZ58ftQA%2BvhpAoqATWRM%3D',
            postedBy: {
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1600717367664642.jpeg?x-expires=1662256800&x-signature=%2Bhok0zVCskLDDGhK3THr3WQ0%2B44%3D',
                title: 'chisu10',
                desc: 'Chi Su',
            },
        },
    ];

    const handlerChangeInput = (e: any) => {
        setSpin(true);
        setTimeout(() => {
            if (e.target.value.length > 0) {
                setSpin(false);
            }
        }, 1000);
        setSearchValue(e.target.value);
    };
    const imageLink =
        'https://firebasestorage.googleapis.com/v0/b/the-coffee-shop-ab9d0.appspot.com/o/avt.jpg?alt=media&token=ddce86b8-d785-4224-a7b4-54e6057bc602';
    return (
        <div style={style} className="navbar_component">
            <Link href="/">
                <div className="logo">
                    <div style={{ width: '50px' }}>
                        <Image src={tiktok1} alt="" layout="responsive" />
                    </div>
                    <div style={{ width: '90px', marginLeft: '-8px' }}>
                        <Image src={tiktok2} alt="" layout="responsive" />
                    </div>
                </div>
            </Link>
            <Tippy
                interactive={true}
                placement="bottom"
                offset={[0, 5]}
                visible={searchValue.length > 0}
                render={(attrs) => (
                    <div className="search_popper" tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <div className="result_item">
                                <FontAwesomeIcon style={{ width: '14px' }} icon={magnifyingGlass} />
                                <p>
                                    {searchValue.length <= 36
                                        ? searchValue.slice(0, 36)
                                        : searchValue.slice(0, 34) + ' ...'}
                                </p>
                            </div>
                            <div className="result_item">
                                <FontAwesomeIcon style={{ width: '14px' }} icon={magnifyingGlass} />
                                <p>
                                    {searchValue.length <= 36
                                        ? searchValue.slice(0, 36)
                                        : searchValue.slice(0, 34) + ' ...'}
                                </p>
                            </div>
                            <div className="result_item">
                                <FontAwesomeIcon style={{ width: '14px' }} icon={magnifyingGlass} />
                                <p>
                                    {searchValue.length <= 36
                                        ? searchValue.slice(0, 36)
                                        : searchValue.slice(0, 34) + ' ...'}
                                </p>
                            </div>
                            <div className="result_item">
                                <FontAwesomeIcon style={{ width: '14px' }} icon={magnifyingGlass} />
                                <p>
                                    {searchValue.length <= 36
                                        ? searchValue.slice(0, 36)
                                        : searchValue.slice(0, 34) + ' ...'}
                                </p>
                            </div>
                            <div className="result_item">
                                <FontAwesomeIcon style={{ width: '14px' }} icon={magnifyingGlass} />
                                <p>
                                    {searchValue.length <= 36
                                        ? searchValue.slice(0, 36)
                                        : searchValue.slice(0, 34) + ' ...'}
                                </p>
                            </div>
                            <div className="account_suggest_title">Tài khoản</div>
                            {accountData.map((item) => {
                                if (item.title.includes(searchValue)) {
                                    return (
                                        <div key={item.id} className="account_suggest">
                                            <div
                                                style={{ backgroundImage: `url(${item.imageLink})` }}
                                                className="suggest_avatar"
                                            ></div>
                                            <div className="suggest_content">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                            <div className="result_item" style={{ fontWeight: '600', paddingLeft: '12px' }}>
                                Xem tất cả kết quả dành cho {'"' + searchValue.slice(0, 9) + '..."'}{' '}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className="search_field">
                    <input
                        value={searchValue}
                        onChange={handlerChangeInput}
                        spellCheck={false}
                        placeholder="Tìm kiếm tài khoản và video"
                    />
                    {spin ? (
                        <FontAwesomeIcon className="fa_icons" icon={spinner} />
                    ) : (
                        <FontAwesomeIcon onClick={() => setSearchValue('')} className="fa_icons" icon={circleXmark} />
                    )}
                    <span></span>
                    <div className="search_icon">
                        <FontAwesomeIcon style={{ width: '18px' }} icon={magnifyingGlass} />
                    </div>
                </div>
            </Tippy>
            <div className="icons_right">
                <Link href="/upload">
                    <div className="upload">
                        <FontAwesomeIcon className="plus_icon" icon={plus} />
                        <span>Tải lên</span>
                    </div>
                </Link>
                <TippyTooltip content="Tin nhắn">
                    <div style={{ width: '26px', marginLeft: '0px', cursor: 'pointer' }}>
                        <Image src={svgIcons.message} alt="" layout="responsive" />
                    </div>
                </TippyTooltip>
                <TippyTooltip content="Hộp thư">
                    <Tippy
                        offset={[60, 10]}
                        visible={option === 'mailBox' ? true : false}
                        interactive={true}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div {...attrs} tabIndex={-1} className="inbox_notification">
                                <PopperWrapper>
                                    <div className="noti_header">
                                        <h4>Thông báo</h4>
                                        <div className="noti_option">
                                            <span
                                                className={`${
                                                    notiOption === 'All activities' ? 'choose' : 'not_choose'
                                                }`}
                                                onClick={() => setNotiOption('All activities')}
                                            >
                                                Tất cả hoạt động
                                            </span>
                                            <span
                                                className={`${notiOption === 'Likes' ? 'choose' : 'not_choose'}`}
                                                onClick={() => setNotiOption('Likes')}
                                            >
                                                Thích
                                            </span>
                                            <span
                                                className={`${notiOption === 'Comments' ? 'choose' : 'not_choose'}`}
                                                onClick={() => setNotiOption('Comments')}
                                            >
                                                Bình luận
                                            </span>
                                            <span
                                                className={`${notiOption === 'Tags' ? 'choose' : 'not_choose'}`}
                                                onClick={() => setNotiOption('Tags')}
                                            >
                                                Lượt nhắc đến và lượt gắn thẻ
                                            </span>
                                            <span
                                                className={`${notiOption === 'Follower' ? 'choose' : 'not_choose'}`}
                                                onClick={() => setNotiOption('Follower')}
                                            >
                                                Follower
                                            </span>
                                        </div>
                                    </div>
                                    <div className="noti_body">
                                        <p>Trước đây</p>
                                        {notifications.map((item) => {
                                            if (notiOption === 'All activities') {
                                                return <NotiItem key={item.id} notification={item} />;
                                            } else if (notiOption === 'Comments') {
                                                return (
                                                    item.category === 'comment' && (
                                                        <NotiItem key={item.id} notification={item} />
                                                    )
                                                );
                                            } else if (notiOption === 'Tags') {
                                                return (
                                                    item.category === 'tag' && (
                                                        <NotiItem key={item.id} notification={item} />
                                                    )
                                                );
                                            } else if (notiOption === 'Follower') {
                                                return (
                                                    item.category === 'follow' && (
                                                        <NotiItem key={item.id} notification={item} />
                                                    )
                                                );
                                            }
                                        })}
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div
                            onClick={() => {
                                if (option === 'mailBox') {
                                    setOption('');
                                } else {
                                    setOption('mailBox');
                                }
                            }}
                            style={{ width: '32px', marginLeft: '0px', cursor: 'pointer' }}
                        >
                            <Image
                                src={option === 'mailBox' ? svgIcons.mailBoxActive : svgIcons.mailBox}
                                alt=""
                                layout="responsive"
                            />
                        </div>
                    </Tippy>
                </TippyTooltip>
                <Tippy
                    interactive={true}
                    placement="bottom-start"
                    render={(attrs) => (
                        <div tabIndex={-1} {...attrs} className="dropdown_menu">
                            <PopperWrapper>
                                <ul>
                                    <li>
                                        <div className="dropdown_icon">
                                            <Image alt="" src={svgIcons.profile} />
                                        </div>
                                        <span>Xem hồ sơ</span>
                                    </li>
                                    <li>
                                        <div className="dropdown_icon">
                                            <Image alt="" src={svgIcons.coin} />
                                        </div>
                                        <span>Nhận xu</span>
                                    </li>
                                    <li>
                                        <div className="dropdown_icon">
                                            <Image alt="" src={svgIcons.settings} />
                                        </div>
                                        <span>Cài đặt</span>
                                    </li>
                                    <li>
                                        <div className="dropdown_icon">
                                            <Image alt="" src={svgIcons.vnmese} />
                                        </div>
                                        <span>Tiếng việt</span>
                                    </li>
                                    <li>
                                        <div className="dropdown_icon">
                                            <Image alt="" src={svgIcons.help} />
                                        </div>
                                        <span>Phản hồi và trợ giúp</span>
                                    </li>
                                    <li>
                                        <div className="dropdown_icon">
                                            <Image alt="" src={svgIcons.logout} />
                                        </div>
                                        <span>Đăng xuất</span>
                                    </li>
                                </ul>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div style={{ backgroundImage: `url(${imageLink})`, cursor: 'pointer' }} className="avatar"></div>
                </Tippy>
            </div>
        </div>
    );
};

export default Navbar;
