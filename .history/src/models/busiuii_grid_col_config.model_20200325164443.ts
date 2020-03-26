/**
 * table-grid col 设置表
 * Name	Code	Data Type	Length	Precision	Primary	Foreign Key	Mandatory
id	id	NUMBER(19)	19		TRUE	FALSE	TRUE
功能id	func_id	number(19)	19		FALSE	FALSE	FALSE
表格编码	grid_code	VARCHAR2(50)	50		FALSE	FALSE	FALSE
列名	col_name	VARCHAR2(50)	50		FALSE	FALSE	FALSE
列别名	col_asname	VARCHAR2(50)	50		FALSE	FALSE	FALSE
列顺序	col_order	int			FALSE	FALSE	FALSE
列类型	col_datatype	VARCHAR2(4)	4		FALSE	FALSE	FALSE
列是否有超链接	hava_url	VARCHAR2(50)	50		FALSE	FALSE	FALSE
是否业务主键	have_primarykey	VARCHAR2(4)	4		FALSE	FALSE	FALSE
是否显示	have_display	VARCHAR2(4)	4		FALSE	FALSE	FALSE
是否排序	have_order	VARCHAR2(4)	4		FALSE	FALSE	FALSE
关联数据字典	col_dict	VARCHAR2(20)	20		FALSE	FALSE	FALSE
列样式	col_style	VARCHAR2(500)	500		FALSE	FALSE	FALSE
列宽	col_width	VARCHAR2(100)	100		FALSE	FALSE	FALSE
列批注	col_postil	VARCHAR2(100)	100		FALSE	FALSE	FALSE
控件类型	input_type	VARCHAR2(4)	4		FALSE	FALSE	FALSE
是否必填	have_required	VARCHAR2(4)	4		FALSE	FALSE	FALSE
校验规则	validate_rules	VARCHAR2(4)	4		FALSE	FALSE	FALSE
自定义校验规则	other_validate_rules	VARCHAR2(100)	100		FALSE	FALSE	FALSE
条件编辑	if_editable	VARCHAR2(100)	100		FALSE	FALSE	FALSE
取值逻辑	value_logic	VARCHAR2(200)	200		FALSE	FALSE	FALSE
赋值逻辑	ASSIGN_LOGIC	VARCHAR2(200)	200		FALSE	FALSE	FALSE
最小值	col_min	number(19)	19		FALSE	FALSE	FALSE
最大值	col_max	number(19)	19		FALSE	FALSE	FALSE
数值精度	col_precision	number(19)	19		FALSE	FALSE	FALSE
最大长度	COL_MAXLENGTH	number(19)	19		FALSE	FALSE	FALSE
条件显示	IF_DISPLAY	VARCHAR2(100)	100		FALSE	FALSE	FALSE
统计方式	STATISTICS_TYPE	VARCHAR2(4)	4		FALSE	FALSE	FALSE
统计Lable	STATISTICS_LABLE	VARCHAR2(100)	100		FALSE	FALSE	FALSE
统计绑定名称	STATISTICS_NAME	VARCHAR2(100)	100		FALSE	FALSE	FALSE
是否默认选中第一条	HAVE_CHECKED_TOP	VARCHAR2(4)	4		FALSE	FALSE	FALSE
 */
export interface BusiuiiGridColConfig {
    id: number,//                   NUMBER(19)                     not null,
    func_id: number,//              number(19)                     null,
    grid_code: string,//            VARCHAR2(50)                   null,
    col_name: string,//             VARCHAR2(50)                   null,
    col_asname: string,//           VARCHAR2(50)                   null,
    col_order: number,//            int                            null,
    col_datatype: string,//         VARCHAR2(4)                    null,
    hava_url: string,//             VARCHAR2(50)                   null,
    have_primarykey: string,//      VARCHAR2(4)                    null,
    have_display: string,//         VARCHAR2(4)                    null,
    have_order: string,//           VARCHAR2(4)                    null,
    col_dict: string,//             VARCHAR2(20)                   null,
    col_style: string,//            VARCHAR2(500)                  null,
    col_width: string,//            VARCHAR2(100)                  null,
    col_postil: string,//           VARCHAR2(100)                  null,
    input_type: string,//           VARCHAR2(4)                    null,
    have_required: string,//        VARCHAR2(4)                    null,
    validate_rules: string,//       VARCHAR2(4)                    null,
    other_validate_rules: string,// VARCHAR2(100)                  null,
    if_editable: string,//          VARCHAR2(100)                  null,
    value_logic: string,//          VARCHAR2(200)                  null,
    ASSIGN_LOGIC: string,//         VARCHAR2(200)                  null,
    col_min: number,//              number(19)                     null,
    col_max: number,//              number(19)                     null,
    col_precision: number,//        number(19)                     null,
    COL_MAXLENGTH: number,//        number(19)                     null,
    IF_DISPLAY: string,//           VARCHAR2(100)                  null,
    STATISTICS_TYPE: string,//      VARCHAR2(4)                    null,
    STATISTICS_LABLE: string,//     VARCHAR2(100)                  null,
    STATISTICS_NAME: string,//      VARCHAR2(100)                  null,
    HAVE_CHECKED_TOP: string,//     VARCHAR2(4)                    null,
}