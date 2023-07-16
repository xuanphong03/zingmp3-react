import classNames from 'classnames/bind';
import styles from './SongItems.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SongItem() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <figure className={cx('media-song')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img
                className={cx('song-img')}
                src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg"
                alt="img"
            />
            <div className={cx('song-infor')}>
                <span className={cx('song-name')}>AS IF IT'S YOUR LAST</span>
                <span className={cx('singer-name')}>Blackpink</span>
            </div>
            {isHovered && (
                <div className={cx('options')}>
                    <button>
                        <FontAwesomeIcon className={cx('heart-icon')} icon="fa-regular fa-heart" />
                    </button>

                    <button>
                        <FontAwesomeIcon className={cx('more-icon')} icon="fa-solid fa-ellipsis" />
                    </button>
                </div>
            )}
        </figure>
    );
}

export default SongItem;
