import React from 'react';

export default class App extends React.Component {
  render() {
    var arr = ['aa', 'bb', 'cc'];
    var classArr = ['a', 'b', 'c'];
    return (
      <div>
				<ul>
					{arr.map((item, index)=>{
											return <li className={classArr[index]} key={index} onClick={this.showLi.bind(this, index)}>{item}</li>
										})}
				</ul>

				{this.props.children}
			</div>
    );
  }
  showLi(num) {
    console.log(this);
    console.log(num);
  }
}