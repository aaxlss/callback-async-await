fetchData(API, (error1, data1) => {
    if(error1) return console.error(error1);

    fetchData(API + data1.results[0].id,  (error2, data2) => {
        if(data2) return console.error(error2);
        fetchData(data2.oring.url, (error3, data3) => {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    });
});