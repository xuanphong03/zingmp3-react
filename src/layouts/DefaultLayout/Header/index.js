import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '~/components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('container')}>
            <div className={cx('level')}>
                <div className={cx('level-left')}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                </div>
                <div className={cx('level-left')}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
            </div>
            <Search />
        </header>
    );
}

export default Header;
