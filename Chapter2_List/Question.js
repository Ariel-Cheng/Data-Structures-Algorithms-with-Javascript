/*
 *题目：
 *  增加一个向列表中插入元素的方法，
 *该方法只在待插入元素大于列表中的所有元素时才进行插入操作。
 *这里的大于有多重含义，对于数字，它是指数值上的大小；
 *对于字母，它是指在字母表中出现的先后顺序。
 *
 */

/*
* @description :tools Function a与b的大小比较，
* 
* @ return :boolean
*/
function compareSequence(a, b){
    
    //如果是字符串的数字( "11" < "2" )的处理
    var num1 = parseInt(a, 10),
        num2 = parseInt(b, 10);
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        if (num1 > num2) {
            return true;
        } else {
            return false;
        }
    }

    //字母的处理
    if (a.toLowerCase() > b.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}


//注这里需配合课本中实现的List列表类来解答
function insertBiggest (element) {
    for (var i=0; i < this.dataStore.length; i++) {

        //需大于列表全部元素
        if ( !compareSequence(element, this.dataStore[i]) ) {
            return false;
        }
    }

    this.append(element);
    return true;
}