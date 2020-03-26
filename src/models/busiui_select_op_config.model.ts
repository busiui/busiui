/**
 * table-select 设置表
 * 表格上方的查询区域组件
 * Name	Code	Data Type	Length	Precision	Primary	Foreign Key	Mandatory
功能id	func_id	number(19)	19		FALSE	FALSE	FALSE
表格编码	grid_code	VARCHAR2(50)	50		FALSE	FALSE	FALSE
表格类型	grid_type	VARCHAR2(4)	4		FALSE	FALSE	FALSE
下钻表格编码	desc_grid_code	VARCHAR2(50)	50		FALSE	FALSE	FALSE
下钻表格功能ID	DESC_GRID_func_ID	VARCHAR2(50)	50		FALSE	FALSE	FALSE
是否带复选框	have_checked	VARCHAR2(4)	4		FALSE	FALSE	FALSE
是否分页	have_page	VARCHAR2(4)	4		FALSE	FALSE	FALSE
默认行数	page_size	int			FALSE	FALSE	FALSE
初始化SQL	init_sql	VARCHAR2(4000)	4,000		FALSE	FALSE	FALSE
微服务	micro_service	VARCHAR2(4)	4		FALSE	FALSE	FALSE
API地址	API	VARCHAR2(500)	500		FALSE	FALSE	FALSE
行样式规则	row_style_rule	VARCHAR2(500)	500		FALSE	FALSE	FALSE
列操作按钮显示方式	col_op_display	VARCHAR2(4)	4		FALSE	FALSE	FALSE
是否有横向滚动条	have_scoller	VARCHAR2(4)	4		FALSE	FALSE	FALSE
表格LABEL显示位置	HEADER_PLACE	VARCHAR2(4)	4		FALSE	FALSE	FALSE
边框是否需要显示	HAVE_BORDER	VARCHAR2(4)	4		FALSE	FALSE	FALSE
头部显示文字	HEAD_MSG	VARCHAR2(500)	500		FALSE	FALSE	FALSE
底部显示文字	BOTTOM_MSG	VARCHAR2(500)	500		FALSE	FALSE	FALSE
 * 
 */
export interface BusiuiSelectOpConfigModel {
    id: number,//                   NUMBER(19)                     not null,
    func_id: number,//              number(19)                     null,
    select_code: string,//          VARCHAR2(50)                   null,
    input_type: string,//           VARCHAR2(4)                    null,
    input_row: number,//            int                            null,
    input_column: number,//         int                            null,
    input_dict: string,//           VARCHAR2(200)                  null,
    input_grouptype: string,//      VARCHAR2(4)                    null,
    input_group: number,//          int                            null,
    input_group_unitnum: number,//  int                            null,
    ng_model: string,//             VARCHAR2(50)                   null,
    placeholder: string,//          VARCHAR2(200)                  null,
    where_and: string,//            VARCHAR2(200)                  null,
    default_value: string,//        VARCHAR2(50)                   null,
    have_display: string,//         VARCHAR2(4)                    null,
    if_display: string,//           VARCHAR2(100)                  null,
    lable: string,//                VARCHAR2(200)                  null,
}
