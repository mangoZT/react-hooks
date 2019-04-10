import React, { useReducer, useEffect } from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
import { Input, Button, List } from 'antd';
import style from './index.less'



function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
          ...state,
          ...action.playod
      };
  }
}

const UserInfo = (props) => {
    
    // 初始化reducer
    const initialState = {title: "", search:false};
    const [state, dispatch] = useReducer(reducer, initialState);
 
    // 查询数据
    useEffect(() => {
        props.getUserInfo(state.title);
    }, [state.search]);


    // 参数变化
    const handleChange=(e) => { 
        dispatch({type: 'change', playod:{title:e.target.value}})
    }

    // 执行查询
    const doSearch = () => {
        dispatch({type: 'change', playod:{search:!state.search}})
    }

    const { list=[] } = props.userInfo;
    return (
        <div className={style.userInfo}>
            <p>
                标题：<Input style={{width:'100px'}} onChange={(e) => { handleChange(e) }} />
                <Button  type="primary" onClick={() => { doSearch() }}>查询</Button>
            </p>
            <List
                header={<div>列表</div>}
                footer={null}
                bordered
                dataSource={list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>
    )
    
}

export default connect((userInfo) => userInfo, {getUserInfo})(UserInfo);