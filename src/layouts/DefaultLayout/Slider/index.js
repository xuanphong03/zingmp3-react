import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

const slides = [
    {
        id: 1,
        path: 'https://photo-zmp3.zmdcdn.me/banner/a/b/d/9/abd969c915ae1ba32018654fea49039f.jpg',
    },
    {
        id: 2,
        path: 'https://photo-zmp3.zmdcdn.me/banner/a/b/d/9/abd969c915ae1ba32018654fea49039f.jpg',
    },
    {
        id: 3,
        path: 'https://photo-zmp3.zmdcdn.me/banner/a/b/d/9/abd969c915ae1ba32018654fea49039f.jpg',
    },
];

function Slider() {
    return (
        <ul className={cx('slides-wrapper')}>
            {slides.map((slide) => {
                return (
                    <li className={cx('slide-item')} key={slide.id}>
                        <img className={cx('slide-img')} src={slide.path} alt="" />
                    </li>
                );
            })}
        </ul>
    );
}

export default Slider;
