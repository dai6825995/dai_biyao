const baseUrl = "http://127.0.0.1:9527/api"

const apis = {
    getTypeOne: baseUrl + "/getTypeOne",                //获取一级分类接口
    hotList: baseUrl + "/hotList",                      //热卖商品接口
    getTypeTwo: baseUrl + "/getTypeTwo",                //获取二级分类接口
    getTypeTwoList: baseUrl + "/getTypeTwoList",        //获取二级分类商品接口
    goodList: baseUrl + "/goodList",                    //获取二级分类商品接口
    newList: baseUrl + "/newList",                      //获取二级分类商品接口
    search: baseUrl + "/search",                      //获取二级分类商品接口
}

export default apis