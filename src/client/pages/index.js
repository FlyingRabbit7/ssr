import React from 'react';

//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

   handlerClick(){
       alert('react ssr 呀。');
   }

    render() {
        return <h1 onClick={this.handlerClick}>click here12!</h1>
    }
}