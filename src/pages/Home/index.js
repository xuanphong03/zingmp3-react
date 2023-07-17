import Slider from '~/layouts/DefaultLayout/Slider';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <Slider />
        </div>
    );
}

export default Home;
