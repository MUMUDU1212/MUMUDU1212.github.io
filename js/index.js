/* 获取网址携带的参数 */
function getUrlParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r != null){
        return decodeURIComponent(r[2]); //decodeURIComponent 处理中文乱码
    }
    return null;
}