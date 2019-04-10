import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useSearchData = (url, params) => {
     // 是否正在请求中
     const [isLoading, setIsLoanding] = useState(false);
     // 请求参数
     const [queryParams, setQueryParams] = useState(params);
     // 请求结果
     const [data, setData] = useState([]);

    // 查询数据
    const queryTableData = (params) => {
        setIsLoanding(true);
        axios.post(url).then((res)=>{
            let data = JSON.parse(res.request.responseText);
            const list = data.list.filter((item, index) => {
                return item.indexOf(params) > -1
            })
            setIsLoanding(false);
            setData(list);
        })
    }

    // 根据参数变化决定是否请求数据
    useEffect(() => {
        queryTableData(queryParams);
    }, [queryParams]);

     // 供外部调用
     const doRequest = (params) => {
        setQueryParams(params);
    }

    return {
        isLoading,
        data,
        doRequest
    };
} 

export default useSearchData;