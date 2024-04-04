// write all of your API

import axiosSecure from "."


// get all portfolio data
export const getPortfolioData = async(url) => {
    const {data} = await axiosSecure(url)
    return data
}


// filter data enabled true

export const filterEnabledTrue = (dataArray) => {
    const filteredData = dataArray?.filter(data => data.enabled?data.enabled == true:[])
    return filteredData
}

export const filterSingleData = (dataArray,id) => {
    const singleData = dataArray?.find(data => data.image?.public_id === id )
    return singleData
}

