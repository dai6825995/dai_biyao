const baseUrl = "http://127.0.0.1:9527/api"

const apis = {
    getTypeOne: baseUrl + "/getTypeOne",                //获取一级分类接口
    hotList: baseUrl + "/hotList",                      //热卖商品接口
    getTypeTwo: baseUrl + "/getTypeTwo",                //获取二级分类接口
    getTypeTwoList: baseUrl + "/getTypeTwoList",        //获取二级分类商品接口
    goodList: baseUrl + "/goodList",                    //获取商品接口
    newList: baseUrl + "/newList",                      //每日上新接口
    search: baseUrl + "/search",                        //搜索接口
    register: baseUrl + "/register",                    //注册接口
    login: baseUrl + "/login",                          //登录接口
    detail: baseUrl + "/detail",                        //商品详情接口
    add: baseUrl + "/add",                              //添加购物车接口
    sameList: baseUrl + "/sameList",                    //同类商品接口
    supplierList: baseUrl + "/supplierList",            //进店看看接口
    shopList: baseUrl + "/shopList",                    //获取购物车接口
}

export default apis