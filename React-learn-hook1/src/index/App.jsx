import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Header from '../common/Header';
import DepartDate from './DepartDate';
import HighSpeed from './HighSpeed';
import Journey from './Journey';
import Submit from './Submit';
import CitySelector from '../common/CitySelector';

import { exchangeFromTo, showCitySelector, hideCitySelector, fetchCityData } from './actions';

function App(props) {
  const { from, to, dispatch, isCitySelectorVisible, cityData, isLoadingCityData } = props;

  const onBack = useCallback(() => {
    window.history.back();
    console.log('onBack');
  }, []);

  //这里因为下面传入的方法都是callback所以使用useCallback封装出来
  // const doExchangeFromTo = useCallback(() => {
  //     dispatch(exchangeFromTo());
  // }, []);

  // const doShowCitySelector = useCallback((m) => {
  //     dispatch(showCitySelector(m));
  // }, []);

  //这里是通过useMemo和bindActionCreators封装，代替上面的两个callback
  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData
      },
      dispatch
    );
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="">
        <Journey from={from} to={to} {...cbs} />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
