import Layout from '../app/layout';
import React  from 'react';
import { Route, Switch } from 'react-router-dom';

//服务端也会用到所以通过参数的方式将配置传递进来
function RouterIndex({routeList}) {
    return (
        <Layout> //公共组件
            <Switch>
                {
                    routeList.map(item=>{
                            return <Route key={item.path} {...item}></Route>
                    })
                }
            </Switch>
        </Layout>
    );
}

export default RouterIndex;