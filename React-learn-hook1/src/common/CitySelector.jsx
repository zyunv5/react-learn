import React, { useState, useMemo, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './CitySelector.css';

function CityItem(props) {
    const { name, onSelect } = props;
    return (
        <li
            classNam="city-li"
            onClick={() => {
                onSelect(name);
            }}
        >
            {name}
        </li>
    );
}

function CitySection(props) {
    const { title, cities = [], onSelect } = props;
    return (
        <ul className="city-ul">
            <li className="city-li" key="title">
                {title}
            </li>
            {cities.map((city) => {
                return <CityItem key={city.name} name={city.name} onSelect={onSelect} />;
            })}
        </ul>
    );
}

function CityList(props) {}

export default function CitySelector(props) {
    const { show, cityData, isLoading, onBack, fetchCityData } = props;
    const [searchKey, setSearchKey] = useState('');
    // const key=searchKey.trim();
    //searchKey不变的时候，trim不需要重新计算，key不需要重新计算。
    const key = useMemo(() => searchKey.trim(), [searchKey]);

    useEffect(() => {
        if (!show || cityData || isLoading) {
            return;
        }
        fetchCityData();
    }, [show, cityData, isLoading]);

    return (
        // <div className={["city-selector",(!show)&&'hidden'].filter(Boolean).join(" ")}></div>
        <div
            className={classnames('city-selector', {
                hidden: !show
            })}
        >
            <div className="city-search">
                <div className="search-back" onClick={() => onBack()}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        value={searchKey}
                        className="search-input"
                        placeholder="城市、车站的中文或者拼音"
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                </div>
                <i
                    className={classnames('search-clean', { hidden: key.length === 0 })}
                    onClick={() => setSearchKey('')}
                >
                    &#xf063;
                </i>
            </div>
        </div>
    );
}

CitySelector.protoType = {
    show: PropTypes.bool.isRequired,
    cityData: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    onBack: PropTypes.func.isRequired,
    fetchCityData: PropTypes.func.isRequired
};
