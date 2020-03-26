if exists(
   select 1 from sys.systable 
   where table_name='busiui_select_op_config'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table busiui_select_op_config
end if;

/*==============================================================*/
/* Table: busiui_select_op_config                               */
/*==============================================================*/
create table busiui_select_op_config 
(
   id                   NUMBER(19)                     not null,
   func_id              number(19)                     null,
   select_code          VARCHAR2(50)                   null,
   input_type           VARCHAR2(4)                    null,
   input_row            int                            null,
   input_column         int                            null,
   input_dict           VARCHAR2(200)                  null,
   input_grouptype      VARCHAR2(4)                    null,
   input_group          int                            null,
   input_group_unitnum  int                            null,
   ng_model             VARCHAR2(50)                   null,
   placeholder          VARCHAR2(200)                  null,
   where_and            VARCHAR2(200)                  null,
   default_value        VARCHAR2(50)                   null,
   have_display         VARCHAR2(4)                    null,
   if_display           VARCHAR2(100)                  null,
   lable                VARCHAR2(200)                  null,
   constraint PK_BUSIUI_SELECT_OP_CONFIG primary key (id)
);

comment on column busiui_select_op_config.select_code is 
'编码规则
[SELECT][biz_id]-1';

comment on column busiui_select_op_config.input_type is 
'SYSAUTO001
	1	文本(pwd)
	2	文本(string)
	3	文本(float)
	4	文本(int)
	5	可输可选(单选)
	6	可输可选(多选)
	7	日期控件(日)
	8	日期控件(月)
	9	日期控件(季)
	10	日期控件(年)
	11	多选框
	12	单选框
	13	下拉框(单选)
	14	A标签
	15	附件
	16	动态Table
	17	动态Form
	18	日期控件(带时分秒)
	19	大文本(textarea)
	20	tag标签
	21	下拉框(多选)
';

comment on column busiui_select_op_config.input_grouptype is 
'动态表单-查询-控件组类型
SYSAUTO002
	1	日期控件组
	2	下拉控件组
	3	输入控件组
	4	checkbox组


如果是 日期控件组，那么
需要加校验  组元素编号 1 的值 必须 <= 组元素编号 2的值

如果是 下拉控件组，那么
需要加联动事假  组元素编号 1 的值改变 会影响组元素编号 2的选项改变。

如果是输入控件组，那么 可以将前面的输入控件的内容带到后续控件中作为初始化内容
';

comment on column busiui_select_op_config.input_group is 
'考虑 日期控件 有一组关系
起始日期 < 截止日期的校验规则

考虑 下拉控件 有一组关系
前置控制的值改变 会 影响后置控件的选项变化';

comment on column busiui_select_op_config.input_group_unitnum is 
'1
2';

comment on column busiui_select_op_config.ng_model is 
'查询 sql 的条件名称';

comment on column busiui_select_op_config.where_and is 
'and a.input_ime between :begindate and :enddate

and (a.order_code like :code or a.order_code like :code)

and a.trade_code = :tradeCode

and a.trade_code in :fradeCode';

comment on column busiui_select_op_config.have_display is 
'是否标示	
SYS0000001	0	否
		1	是
';

comment on column busiui_select_op_config.if_display is 
'eg:
status=''1''';
