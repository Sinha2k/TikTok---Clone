import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';

const circleCheck = faCircleCheck as IconProp;
interface accountProps {
    imageLink: string;
    title: string;
    desc: string;
}
const AccountItem = ({ imageLink, title, desc }: accountProps) => {
    return (
        <Tippy
            interactive={true}
            delay={[800, 0]}
            offset={[-10, 0]}
            placement="bottom"
            render={(attrs) => (
                <div tabIndex={-1} {...attrs} className="account_preview">
                    <PopperWrapper>
                        <div className="preview_header">
                            <div style={{ backgroundImage: `url(${imageLink})` }} className="account_avatar"></div>
                            <button>Follow</button>
                        </div>
                        <div className="account_title">
                            <h4>{title}</h4>
                            <FontAwesomeIcon style={{ width: '14px' }} icon={circleCheck} />
                        </div>
                        <p className="desc_preview">{desc}</p>
                        <p style={{ marginTop: '8px' }} className="desc_preview">
                            <b>
                                <span>6.9M </span>
                            </b>
                            <span style={{ marginRight: '10px' }}>Follower</span>
                            <b>
                                <span>442.1M </span>
                            </b>
                            <span>Thích</span>
                        </p>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className="account_card">
                <div style={{ backgroundImage: `url(${imageLink})` }} className="account_avatar"></div>
                <div className="account_content">
                    <div className="account_title">
                        <h4>{title}</h4>
                        <FontAwesomeIcon style={{ width: '14px' }} icon={circleCheck} />
                    </div>
                    <p>{desc}</p>
                </div>
            </div>
        </Tippy>
    );
};

export default AccountItem;
