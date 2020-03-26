/**
 * table-grid 整体设置表
 * Name	Code	Data Type	Length	Precision	Primary	Foreign Key	Mandatory
id	id	NUMBER(19)	19		TRUE	FALSE	TRUE
功能id	func_id	number(19)	19		FALSE	FALSE	FALSE
查询区域编码	select_code	VARCHAR2(50)	50		FALSE	FALSE	FALSE
控件类型	input_type	VARCHAR2(4)	4		FALSE	FALSE	FALSE
控件位置(行)	input_row	int			FALSE	FALSE	FALSE
控件位置(列)	input_column	int			FALSE	FALSE	FALSE
控件绑定数据字典(可输可选、checkbox、Radio)	input_dict	VARCHAR2(200)	200		FALSE	FALSE	FALSE
控件组类型	input_grouptype	VARCHAR2(4)	4		FALSE	FALSE	FALSE
控件组号	input_group	int			FALSE	FALSE	FALSE
组元素编号	input_group_unitnum	int			FALSE	FALSE	FALSE
ngModel	ng_model	VARCHAR2(50)	50		FALSE	FALSE	FALSE
placeholder(控件名称)	placeholder	VARCHAR2(200)	200		FALSE	FALSE	FALSE
查询条件where拼接语句	where_and	VARCHAR2(200)	200		FALSE	FALSE	FALSE
默认值	default_value	VARCHAR2(50)	50		FALSE	FALSE	FALSE
是否显示	have_display	VARCHAR2(4)	4		FALSE	FALSE	FALSE
条件显示	if_display	VARCHAR2(100)	100		FALSE	FALSE	FALSE
lable	lable	VARCHAR2(200)	200		FALSE	FALSE	FALSE
 */
export interface BusiuiGridConfigModel {
    id: number,//                  NUMBER(19)                     not null,
    func_id: number,//              number(19)                     null,
    grid_code: string,//            VARCHAR2(50)                   null,
    grid_type: string,//            VARCHAR2(4)                    null,
    desc_grid_code: string,//       VARCHAR2(50)                   null,
    DESC_GRID_func_ID: string,//    VARCHAR2(50)                   null,
    have_checked: string,//         VARCHAR2(4)                    null,
    have_page: string,//            VARCHAR2(4)                    null,
    page_size: number,//            int                            null,
    init_sql: string,//             VARCHAR2(4000)                 null,
    micro_service: string,//        VARCHAR2(4)                    null,
    API: string,//                  VARCHAR2(500)                  null,
    row_style_rule: string,//       VARCHAR2(500)                  null,
    col_op_display: string,//       VARCHAR2(4)                    null,
    have_scoller: string,//         VARCHAR2(4)                    null,
    HEADER_PLACE: string,//         VARCHAR2(4)                    null,
    HAVE_BORDER: string,//          VARCHAR2(4)                    null,
    HEAD_MSG: string,//             VARCHAR2(500)                  null,
    BOTTOM_MSG: string,//           VARCHAR2(500)                  null,
}