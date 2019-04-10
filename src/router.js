import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from 'components/Loading';

// 引入页面

const UserInfo = loadable({
    loader: () => import('pages/UserInfo'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const NotFound = loadable({
    loader: () => import('pages/notfound'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})

// 路由
const getRouter = () => (
    <Switch>
        <Route path="/" component={UserInfo}/>
        <Route component={NotFound}/>
    </Switch>
);

export default getRouter;