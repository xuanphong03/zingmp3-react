import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DownloadIcon } from '~/components/Icons';
import Search from '~/components/Search';
import Button from '~/components/Button';
import account_img from '~/assets/images/account-img-default.png';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import MenuSetting from '~/components/Popper/MenuSetting';
import { Wrapper as WrapperPopper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Header() {
    const [showSetting, setShowSetting] = useState(false);
    const [showLoginBtn, setShowLoginBtn] = useState(false);

    const handleShowSetting = () => {
        setShowSetting(!showSetting);
    };

    const handleShowLoginBtn = () => {
        setShowLoginBtn(!showLoginBtn);
    };

    return (
        <header className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('level')}>
                    <div className={cx('level-left')}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </div>
                    <div className={cx('level-right')}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </div>
                </div>
                <Search />
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('download-btn')}>
                    <Button display_flex={true}>
                        <DownloadIcon width="20px" height="20px" />
                        <span>Tải bản Windows</span>
                    </Button>
                </div>
                <Tippy
                    placement="bottom-start"
                    interactive={true}
                    visible={showSetting}
                    onClickOutside={() => setShowSetting(!showSetting)}
                    render={(attrs) => <MenuSetting {...attrs} />}
                >
                    <div onClick={handleShowSetting} className={cx('setting-btn')}>
                        <Button>
                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                        </Button>
                    </div>
                </Tippy>
                <Tippy
                    interactive={true}
                    visible={showLoginBtn}
                    placement="bottom-end"
                    onClickOutside={() => setShowLoginBtn(!showLoginBtn)}
                    render={(attrs) => {
                        return (
                            <div className={cx('wrapper-login-btn')} {...attrs}>
                                <WrapperPopper>
                                    <Button
                                        href="https://id.zalo.me/account?continue=https%3A%2F%2Fzingmp3.vn%2Falbum%2FK-Pop-Daebak-SEVENTEEN-aespa-Stray-Kids-EXO%2FZOCCU87Z.html%3FisZaloPopupLogin%3D1"
                                        login_btn={true}
                                    >
                                        Đăng nhập
                                    </Button>
                                </WrapperPopper>
                            </div>
                        );
                    }}
                >
                    <div onClick={handleShowLoginBtn} className={cx('account-btn')}>
                        <img src={account_img} alt="account-btn" />
                    </div>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
