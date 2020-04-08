/**
 * SYSAUTO001
 * 动态表单-查询-控件类型
 */
export enum input_type {
    /**
     * //文本(pwd)
     */
    pwd = 1,
    /**
     * //文本(string)
     */
    string = 2,
    /**
     * 文本(float)
     */
    float = 3,
    /**
     * 文本(int)
     */
    int = 4,
    /**
     * 可输可选(单选)
     */
    dictDropDown = 5,
    /**
     * 可输可选(多选)
     */
    dictDropDownCheck = 6,
    /**
     * 日期控件(日)
     */
    dateDay = 7,
    /**
     * 日期控件(月)
     */
    dateMon = 8,

    /**
     * 日期控件(季)
     */
    dateQ = 9,
    /**
     * 日期控件(年)
     */
    dateYear = 10,
    /**
     * 多选框
     */
    checkBox = 11,
    /**
     * 单选框
     */
    radio = 12,
    /**
     * 下拉框(单选)
     */
    dropDown = 13,

    /**
     *  A标签
     */
    alink = 14,
    /**
     * 附件
     */
    file = 15,
    /**
     * 动态Table
     */
    dynTable = 16,
    /**
     * 动态Form
     */
    dynForm = 17,
    /**
     * 日期控件(带时分秒)
     */
    dateSS = 18,
    /**
     * 大文本(textarea)
     */
    textarea = 19,
    /**
     * tag标签
     */
    tag = 20,
    /**
     * 下拉框(多选)
     */
    dropDownCheck = 21,

}


/**
 * SYSAUTO002
 * 动态表单-查询-控件组类型
 */
export enum input_grouptype {
    /**
     * 日期控件组
     */
    dateGroup = 1,
    /**
     * 下拉控件组
     */
    dropDownGroup = 2,
    /**输入控件组
     * 
     */
    inputGroup = 3,
    /**
     * checkbox组
     */
    checkBoxGroup = 4
}

/**
 * SYSAUTO004
 * 动态表单-查询-列类型
 */
export enum col_datatype {
    /**
     * 字符串
     */
    string = 1,
    /**
     * 日期
     */
    date = 2,
    /**
     * 数值
     */
    number = 3,
    /**
     * 千分位金额
     */
    amount = 4,

    /**
     * 控件
     */
    comp = 5,
    /**
     * 转换币种
     */
    amountConversion = 6
}

/**
 * SYSAUTO005
 * 动态表单-查询-加载方式
 */
export enum load_type {
    /**
     * 模态框加载
     */

    modalBox = 1,
    /**
     * 替换当前页面
     */
    replacePage = 2,
    /**
     * 打开新窗口
     */
    newWindow = 3,
    /**
     * iframe加载
     */
    /**
     * 新窗口打开NG页面
     */
    /**
     * 模态框加载（不带关闭按钮）
     */
    modalBoxNoClose = 6

}
/**
 * SYSAUTO006
 * 动态表单-查询-操作类型
 */
export enum op_type {
    /**
     * iframe
     */
    iframe = 1,
    /**
     * 跳转
     */
    route = 4,

    /**
     * export
     */
    export = 5,

    /**
     * 导入
     */
    import = 6,

    /**
     * 下载
     */
    download = 7,
    /**
     * 确认后操作 9
     */
    enterExe = 9,
    /**
     * batch
     */
    batch = 10,

    /**
     * 暂存 46
     */
    tempSubmit = 46,
    /**
     * 提交
     */
    submit = 47,
    /**
     * 返回
     */
    back = 48,

    /**
     * （取消/关闭）模态窗
     */
    cancel = 49,
    /**
     * 直接请求API
     */
    api = 50

}

/**
 * SYSAUTO007
 * 动态表单-查询-地址类型
 */
export enum addr_type {
    /**
     * url
     */
    url = 1,
    apr = 2,
    func = 3,
    form = 4,
    talbe = 5,
    cacheFunc = 6,

    /**
     * 请求API并加入cache
     */
    apiAndAddCache = 7
}

/**
 * SYSAUTO011
 * 动态表单-查询-默认页数
 */

 export enum table_rowNum{
    min  = 10,
    default = 20,
    max = 50,
     
 }
 /**
  * SYSAUTO012
  * 
  */