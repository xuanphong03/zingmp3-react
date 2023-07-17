import classNames from 'classnames/bind';
import styles from './MenuSetting.module.scss';
import Wrapper from '../Wrapper';
import Button from '~/components/Button';
import { PlayButtonIcon, BroomIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

const settings = [
    {
        type: 'button',
        icon: <PlayButtonIcon />,
        title: 'Trình phát nhạc',
    },
    {
        type: 'button',
        icon: <BroomIcon />,
        title: 'Giao diện',
    },
    {
        type: 'a',
        icon: <FontAwesomeIcon icon="fa-solid fa-circle-info" />,
        PlayButtonIcon,
        title: 'Giới thiệu',
    },
    {
        type: 'a',
        icon: <FontAwesomeIcon icon="fa-solid fa-phone" />,
        title: 'Liên hệ',
    },
    {
        type: 'a',
        icon: <FontAwesomeIcon icon="fa-solid fa-rectangle-ad" />,
        title: 'Quảng cáo',
    },
    {
        type: 'a',
        icon: <FontAwesomeIcon icon="fa-solid fa-file-contract" />,
        title: 'Thỏa thuận sử dụng',
    },
    {
        type: 'a',
        icon: <FontAwesomeIcon icon="fa-solid fa-shield" />,
        title: 'Chính sách bảo mật',
    },
];

function MenuSetting() {
    return (
        <ul className={cx('wrapper')}>
            <Wrapper>
                {settings.map((setting, index) => {
                    const ICON = setting.icon;
                    return (
                        <li className={cx('menu-item')} key={index}>
                            <Button display_flex={true}>
                                <div className={cx('menu-icon')}>{ICON}</div>
                                <span className={cx('menu-title')}>{setting.title}</span>
                            </Button>
                        </li>
                    );
                })}
            </Wrapper>
        </ul>
    );
}

export default MenuSetting;
