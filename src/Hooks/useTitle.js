import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title=`${title}-Flytographer`
    },[title])
};

export default useTitle;