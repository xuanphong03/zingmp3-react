import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { NavLink } from 'react-router-dom';
import {
    DiscMusicIcon,
    ChartIcon,
    RadioMusicIcon,
    AlbumMusicIcon,
    MusicIcon,
    TopicIcon,
    StartIcon,
    PlusIcon,
} from '~/components/Icons';
import logo from '~/assets/images/logo-dark.svg';
const cx = classNames.bind(styles);

const NavLinkTop = [
    {
        id: 1,
        title: 'Khám phá',
        icon: DiscMusicIcon,
        to: '/',
    },
    {
        id: 2,
        title: '#zingchart',
        icon: ChartIcon,
        to: '/zingchart',
    },
    {
        id: 3,
        title: 'Radio',
        icon: RadioMusicIcon,
        to: '/radio',
    },
    {
        id: 4,
        title: 'Thư viện',
        icon: AlbumMusicIcon,
        to: '/library',
        login_require: true,
    },
];

const NavLinkBottom = [
    {
        id: 5,
        title: 'BXH Nhạc Mới',
        icon: MusicIcon,
        to: '/chartnewmusic',
    },
    {
        id: 6,
        title: 'Chủ đề và thể loại',
        icon: TopicIcon,
        to: '/topicandtype',
    },
    {
        id: 7,
        title: 'Top 100',
        icon: StartIcon,
        to: '/top100',
    },
];

function Sidebar() {
    return (
        <div className={cx('container')}>
            <div>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={cx('wrapper')}>
                    <div className={cx('wrapper_navlink')}>
                        {NavLinkTop.map((navlink) => {
                            const Icon = navlink.icon;
                            return (
                                <NavLink
                                    className={(nav) => cx('navlink-item', { active: nav.isActive })}
                                    key={navlink.id}
                                    to={navlink.to}
                                >
                                    <Icon />
                                    <span>{navlink.title}</span>
                                </NavLink>
                            );
                        })}
                    </div>
                    <div className={cx('wrapper_navlink')}>
                        {NavLinkBottom.map((navlink) => {
                            const Icon = navlink.icon;
                            return (
                                <NavLink className={cx('navlink-item')} key={navlink.id} to={navlink.to}>
                                    <Icon />
                                    <span>{navlink.title}</span>
                                </NavLink>
                            );
                        })}
                        <div className={cx('wrapper_login-nav')}>
                            <span className={cx('login-title')}>Đăng nhập để khám phá playlist dành riêng cho bạn</span>
                            <button className={cx('login-btn')}>ĐĂNG NHẬP</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('add_playlist')}>
                <PlusIcon />
                <span>Tạo playlist mới</span>
            </button>
        </div>
    );
}

export default Sidebar;
