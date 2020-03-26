/**
 * table-grid 按钮 设置表
 * 
 * Name	Code	Data Type	Length	Precision	Primary	Foreign Key	Mandatory
id	id	NUMBER(19)	19		TRUE	FALSE	TRUE
功能id	func_id	number(19)	19		FALSE	FALSE	FALSE
表格编码	grid_code	VARCHAR2(50)	50		FALSE	FALSE	FALSE
按钮位置	op_addr	VARCHAR2(4)	4		FALSE	FALSE	FALSE
操作按钮ID	OP_ID	VARCHAR2(50)	50		FALSE	FALSE	FALSE
操作按钮名称	op_name	VARCHAR2(50)	50		FALSE	FALSE	FALSE
操作按钮顺序	op_order	int			FALSE	FALSE	FALSE
是否显示	have_display	VARCHAR2(4)	4		FALSE	FALSE	FALSE
条件显示	if_display	VARCHAR2(100)	100		FALSE	FALSE	FALSE
设置标记位	dynFlag	VARCHAR2(200)	200		FALSE	FALSE	FALSE
按钮小图标样式	NZTYPE	VARCHAR2(20)	20		FALSE	FALSE	FALSE
是否以图标样式显示	have_icon	VARCHAR2(4)	4		FALSE	FALSE	FALSE
按钮样式class	CSS_CLASS	VARCHAR2(200)	200		FALSE	FALSE	FALSE
注册按钮监听	POST_MONITOR	VARCHAR2(4)	4		FALSE	FALSE	FALSE
条件执行	EXE_ROLE	VARCHAR2(200)	200		FALSE	FALSE	FALSE
执行事件	EXE_EVENT	VARCHAR2(500)	500		FALSE	FALSE	FALSE
 */
export interface BusiuiGridBtnConfigModel {
    id: number,//                   NUMBER(19)                     not null,
    func_id: number,//              number(19)                     null,
    grid_code: string,//            VARCHAR2(50)                   null,
    op_addr: string,//              VARCHAR2(4)                    null,
    OP_ID: string,//                VARCHAR2(50)                   null,
    op_name: string,//              VARCHAR2(50)                   null,
    op_order: number,//             int                            null,
    have_display: string,//         VARCHAR2(4)                    null,
    if_display: string,//           VARCHAR2(100)                  null,
    dynFlag: string,//              VARCHAR2(200)                  null,
    NZTYPE: string,//               VARCHAR2(20)                   null,
    have_icon: string,//            VARCHAR2(4)                    null,
    CSS_CLASS: string,//            VARCHAR2(200)                  null,
    POST_MONITOR: string,//         VARCHAR2(4)                    null,
    EXE_ROLE: string,//             VARCHAR2(200)                  null,
    EXE_EVENT: string,//            VARCHAR2(500)                  null,
}