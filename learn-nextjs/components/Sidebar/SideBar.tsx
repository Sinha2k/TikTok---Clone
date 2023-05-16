import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode,faUtensils, faMusic, faBasketball, faGamepad, faHippo} from '@fortawesome/free-solid-svg-icons'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import svgIcons from '../../assets/svgIcons'
import AccountItem from '../utils/AccountItem/AccountItem'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { account } from '../../data/account'

const code = faCode as IconProp
const food = faUtensils as IconProp
const music = faMusic as IconProp
const sport = faBasketball as IconProp
const game = faGamepad as IconProp
const animal = faHippo as IconProp
const SideBar: NextPage = () => {
    const topics = [
        {
            id:0,
            content:'Development',
            icon: code,
        },
        {
            id:1,
            content:'Food',
            icon:food,
        },
        {
            id:2,
            content:'Music',
            icon:music
        },
        {
            id:3,
            content:'Sport',
            icon:sport
        },
        {
            id:4,
            content:'Game',
            icon:game
        },
        {
            id:5,
            content:'Animals',
            icon:animal
        },
    ]
    return (
        <div className='sidebar_component'>
            <div className='sidebar_content'>
                <div className='option'>
                    <Link href='/'>
                        <div className='option_item active'>
                            <div className='sidebar_icons'>
                                <Image alt='' src={svgIcons.home} />
                            </div>
                            <h2>Dành cho bạn</h2>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='option_item'>
                            <div className='sidebar_icons'>
                                <Image alt='' src={svgIcons.follow} />
                            </div>
                            <h2>Đang follow</h2>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='option_item'>
                            <div className='sidebar_icons'>
                                <Image alt='' src={svgIcons.live} />
                            </div>
                            <h2>LIVE</h2>
                        </div>
                    </Link>
                </div>
                <div className='suggest_accounts'>
                    <p>Tài khoản được đề xuất</p>
                    {
                        account.map(item => {
                            return  !item.follow && <AccountItem 
                                        key={item.id} 
                                        title={item.title} 
                                        desc={item.desc} 
                                        imageLink={item.imageLink}
                                    />
                        })
                    }
                    <p style={{color:'rgba(254, 44, 85, 1.0)',cursor:'pointer',marginTop:'10px',fontWeight:'700'}}>Xem tất cả</p>
                </div>
                <div style={{marginTop:'-10px'}} className='suggest_accounts'>
                    <p>Các tài khoản đang follow</p>
                    {
                        account.map(item => {
                            return  item.follow && <AccountItem 
                                        key={item.id} 
                                        title={item.title} 
                                        desc={item.desc} 
                                        imageLink={item.imageLink}
                                    />
                        })
                    }
                    <p style={{color:'rgba(254, 44, 85, 1.0)',cursor:'pointer',marginTop:'10px',fontWeight:'700'}}>Xem thêm</p>
                </div>
                <div style={{marginTop:'-10px'}} className='suggest_accounts'>
                    <p>Khám phá</p>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        topics.map(item => {
                            return <div key={item.id} className='topic_card'>
                                <FontAwesomeIcon className='topic_icon' icon={item.icon} />
                                <p>{item.content}</p>
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
