/**
 * form-panel 组件设置表 
 */
export class BusiuiCompConfigModel {
    id: number;
    func_id: number;
    /**
     * panel编码
     */
    panel_code: string;
    /**
     * 控件ID
     */
    comp_id: string;

    lable: string;

    /**
     * 控件类型
     * SYSAUTO001
     */
    input_type: number;
    /**
     * 控件位置(行)
     */
    input_row: number;
    /**
     * 控件位置(列)
     */
    input_column: number;
    /**
     * 控件绑定数据字典(可输可选、checkbox、Radio)
     */
    input_dict: string;

    /**
     * 控件组类型
     * SYSAUTO002
     */
    input_grouptype: number;

    /**
     * 组元素编号
     */
    input_group: number;
    /**
     * ngModel
     */
    ng_model: string;
    /**
     * placeholder(控件名称)
     */
    placeholder: string;
    /**
     * 默认值
     */
    default_value: string;
    /**
     * 条件显示：默认true
     */
    if_display: string;


    /**
     * 是否必填:默认否
     * SYS0000001 
     */
    have_required: number = 0;

    /**
     * 校验规则
     * SYSAUTO016
     */
    validate_rules: number;

    /**
     * 条件编辑：默认true
     */
    if_editable: string;
    /**
     * 取值逻辑
     */
    value_logic: string;
    /**
     * 赋值逻辑
     */
    assign_logic: string
    /**
     * 最小值
     */
    col_min: number;
    /**
     * 最大值
     */
    col_max: number;
    /**
     * 数值精度
     */
    col_precision: number;

    /**
     * 最大长度
     */
    col_maxlength: number;
    /**
     * 是否默认选中第一条:默认否
     * SYS0000001
     */
    have_checked_top: number = 0;

    /**
     * 是否业务主键
     * SYS0000001
     */
    have_primarykey: number = 0;
}