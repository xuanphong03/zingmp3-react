import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import SongItem from '~/components/SongItems';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    return (
        <Tippy
            interactiveDebounce={200}
            interactive={true}
            placement="bottom-start"
            render={(artrs) => {
                return (
                    isInputFocused && (
                        <div className={cx('search-result')} tabIndex="-1" {...artrs}>
                            <PopperWrapper>
                                <span className={cx('search-title')}>Gợi ý kết quả</span>
                                <SongItem />
                                <SongItem />
                                <SongItem />
                                <SongItem />
                                <SongItem />
                            </PopperWrapper>
                        </div>
                    )
                );
            }}
        >
            <div className={cx('form-search')}>
                <div className={cx('search-box')}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={cx('search-icon')} />
                    <div className={cx('input-wrapper')}>
                        <input
                            value={searchValue}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChange={handleChangeSearchValue}
                            type="text"
                            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                            className={cx('search-input')}
                        />
                    </div>
                </div>
            </div>
        </Tippy>
    );
}

export default Search;
