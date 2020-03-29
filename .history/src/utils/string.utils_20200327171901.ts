/**
 * String工具类
 */
export class StringUtils {

    /**
     * toFixed兼容方法
     * @param number : number 需要转换的数值
     * @param n : number 保留多少位
     */
    numberToFixed(number: any, n = 2) {
        if (n > 20 || n < 0) {
            console.log("请控制在指定范围内 0 and 20");
        }
        // Math.pow(x,y) 返回 x 的 y 次幂。
        if (isNaN(number) || number >= Math.pow(10, 21)) {
            return number;
        }
        //判断是否为 undefined 或者为 0
        if (typeof (n) == 'undefined' || n == 0) {
            return number;
        }

        let result = number.toString();
        const arr = result.split('.');
        // 整数的情况
        if (arr.length < 2) {
            return number;
        }

        const integer = arr[0];
        const decimal = arr[1];
        if (decimal.length == n) {
            return number;
        }
        if (decimal.length < n) {
            return number;
        }
        //截取保留的位数
        result = integer + '.' + decimal.substr(0, n);
        //截取多余的位数
        const last = decimal.substr(n, 1);

        // 四舍五入，转换为整数再处理，避免浮点数精度的损失
        if (parseInt(last, 10) >= 5) {
            const x = Math.pow(10, n);
            result = (Math.round((parseFloat(result) * x)) + 1) / x;
            result = result.toFixed(n);
        } else {
            result = result + '' + last;
            result = Number(result).toFixed(n);
        }
        return result;
    };


    FormatNumber(args: any, precision = 2) {
        if ((args === null) || (typeof args === "undefined") || (/^\s*$/.test(args))) {
            return args;
        }
        if (typeof args === "string") {
            args = args.replace(/,/g, '');
        }
        if (!isNaN(args)) {
            return Number(args).toFixed(precision).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        } else {
            return 0.00;
        }
    }

    /**
     * 格式化数字 将传入的数字格式化去掉千分位逗号
     * @param args
     *            待处理串
     *
     * @Author sherlock Xiao
     */
    DelFormatNumber(args: any) {
        if ((args === null) || (typeof args === "undefined") || (/^\s*$/.test(args))) {
            return args;
        }
        if (typeof args === "string") {
            return args.replace(/,/g, '');
        }
        return args;
    }
    /**
     * 去空格函数.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 去空格函数.
     * @Modified trim(args). Update To: Trim(args).
     * @returns
     */
    Trim(args: any) {
        return args && args.replace(/^\s+|\s+$/g, "");
    }
    /**
     * 验证是否是Number数值类型.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是Number数值类型.
     * @Modified isNumber(args). Update To: IsNumber(args).
     * @returns
     */
    IsNumber(args: any) {
        return !isNaN(args);
    }
    /**
     * 验证是否是String字符串类型.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是String字符串类型.
     * @Modified isString(args). Update To: IsString(args).
     * @returns
     */
    IsString(args: any) {
        return typeof args === "string";
    }
    /**
     * 验证是否是Boolean布尔类型.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是Boolean布尔类型.
     * @Modified isBoolean(args). Update To: IsBoolean(args).
     * @returns
     */
    IsBoolean(args: any) {
        return typeof args === "boolean";
    }
    /**
     * 验证是否是JSON类型.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是JSON类型.
     * @Modified New Function: IsJSON(args).
     * @returns
     */
    IsJSON(args: any) {
        return typeof (args) == "string" && args[0] === '{';
        // Object.prototype.toString.call(args).toLowerCase() == "[object object]" && !args.length;
    }
    /**
     * 验证是否是Function函数.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是Function函数.
     * @Modified isFunction(args). Update To: IsFunction(args).
     * @returns
     */
    IsFunction(args: any) {
        return typeof args === "function";
    }
    /**
     * 验证是否是空「Null」「undefined」「""」.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是空「Null」「undefined」「""」.
     * @Modified isNUE(args). Update To: IsNUE(args).
     * @returns
     */
    IsNUE(args: any) {
        return (args === null) || (typeof args === "undefined") || (/^\s*$/.test(args));
    }
    /**
     * 验证是否是非空「undefined」.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是非空「Null」「undefined」「""」.
     * @Modified New Fiction: IsNotUndefined(args).
     * @returns
     */
    IsUndefined(args: any) {
        return (args === null) || (typeof args === "undefined");
    }
    /**
     * 验证是否是非空「Null」「undefined」「""」.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是非空「Null」「undefined」「""」.
     * @Modified New Fiction: IsNotNUE(args).
     * @returns
     */
    IsNotNUE(args: any) {
        return !(args === null) && !(typeof args === "undefined") && !(/^\s*$/.test(args));
    }
    /**
     * 验证是否是非空「undefined」.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是非空「Null」「undefined」「""」.
     * @Modified New Fiction: IsNotUndefined(args).
     * @returns
     */
    IsNotUndefined(args: any) {
        return !(typeof args === "undefined");
    }
    /**
     * 验证是否是Array数组.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是Array数组.
     * @Modified isArray(args). Update To: IsArray(args).
     * @returns
     */
    IsArray(args: any) {
        return args instanceof Array;
    }
    /**
     * 验证是否是Oject对象.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是Oject对象.
     * @Modified isOject(args). Update To: IsOject(args).
     * @returns
     */
    IsOject(args: any) {
        return args instanceof Object;
    }
    /**
     * 验证是否是Dictionary对象.
     * 
     * @param args
     *            待处理串
     * @Author Victor·Wang 2017.10.24 AM 10:00
     * @Description 验证是否是Dictionary对象.
     * @Modified isDict(args). Update To: IsDict(args).
     * @returns
     */
    IsDict(args: any) {
        return this.IsArray(args) && args.length > 0 && !(typeof args[0].dictId === "undefined") && !(typeof args[0].dictName === "undefined");
    }

    /**
     * 将使用指定分割符的字符串进行排序，例如:D1，E1，F1，D2，E2 处理后的结果就是：D1，D2，E1，E2，F1
     * 
     * @param sortStringValue
     *            要进行排序的字符串类型
     * @param rex
     *            字符串分割的标示
     * @Author sunbaojin 2018.01.08 PM 15:00
     * @Description 将使用指定分割符的字符串进行排序，例如:D1，E1，F1，D2，E2 处理后的结果就是：D1，D2，E1，E2，F1
     * @returns 处理后的字符串
     */
    SortString(sortStringValue: any, rex: any) {
        // 进行处理
        if (this.IsNotNUE(sortStringValue)) {
            var sortStringArray = sortStringValue.split(rex);
            if (this.IsArray(sortStringArray)) {
                sortStringArray = sortStringArray.sort();
                return sortStringArray.join(rex);
            }
        }
        return sortStringValue;
    }

    /**
     * 
     * list转换为帆软报表查询 sql使用的in语句使用的字符串（例：1','2','3 ）
     * 
     * @Title: listToFrString
     * @date 201-08-29 15:41:27
     * @param sqlList
     *            需要查询的list如：list["1","2","3"]
     * @return String 拼接好的查询语句：1','2','3
     * @author vito
     */
    listToFrStringlistToFrString(sqlList: any) {
        var sqlIn = "";
        if (this.IsArray(sqlList)) {
            for (var i = 0; i < sqlList.length; i++) {
                sqlIn += "'" + sqlList[i] + "',";
            }
        } else {
            return sqlList;
        }
        return sqlIn.substring(1, sqlIn.length - 2);
    }


    //校验只要是数字（包含正负整数，0以及正负浮点数）就返回true
    isContainNumber(val: string): boolean {
        var regPos = /^\d+(\.\d+)?$/; //非负浮点数
        if (regPos.test(val)) {
            return true;
        } else {
            return false;
        }

    }

}