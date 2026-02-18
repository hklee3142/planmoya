const  getListData = (value) => {
        const day = value.date();
        if(day % 10 === 0) return {percent : 30, color : '#ff4d4f'};
        if(day % 5 === 0) return {percent : 60, color : '#faad14'};
        if(day % 3=== 0) return {percent : 60, color : '#52c41a'};

        return null;
};

export default getListData;