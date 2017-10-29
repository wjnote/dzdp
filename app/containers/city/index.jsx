import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import CityChoose from '../../components/cityChoose';
import CityList from '../../components/cityList';
import LocalStore from '../../util/localStore';
import { CITYNAME } from '../../config/localStoreKey';
import * as userinfoActionsFormOtherFile from '../../actions/userinfo'

import { getCityData } from '../../fetch/city/city.js';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "选择城市",
      cityList: []
    }
  }
  render() {
    const userinfo = this.props.userinfo;

    return (
    	<div>
      		<Header title={this.state.title}/>
          <CityChoose city={userinfo.cityName}/>
          <CityList citylist={this.state.cityList} changecity={this.changeChooseCity.bind(this)}/>
    	</div>
    )
  }

  componentDidMount() {
    var cityList = getCityData();
    console.log(cityList);
    cityList.then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        cityList: json.hotcity
      })
    })
  }

  changeChooseCity(newCity){
    const userInfo = this.props.userinfo;
    userInfo.cityName = newCity;

    // updata cityname
    this.props.userinfoActions.update(userInfo);

    // updata localhost
    LocalStore.setItem(CITYNAME, newCity);

    // go to index
    hashHistory.push('/');
  }
}


/*            redux 绑定 react 中              */
// 将redux的值注入到 props 中，可以直接使用
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
// 将 redux 的方法注入到 props 中，
function mapDispatchToProps(dispatch){
  return{
    userinfoActions: bindActionCreators(userinfoActionsFormOtherFile, dispatch)
  }
}
//  将redux的方法注入到定义的类里面去
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
