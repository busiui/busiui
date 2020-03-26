/**
 * table-select 设置表
 * 表格上方的查询区域组件
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
