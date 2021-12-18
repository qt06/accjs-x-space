const hotkeyConfig = {
message_input: 'alt+1',
search_input: 'alt+2',
order_input: 'alt+3',
order_detail: 'alt+g',
auto_fill: 'alt+v',
first_member: 'alt+q',
first_message: 'alt+f',
last_message: 'alt+z',
close_dialogue: 'alt+c',
yw: 'alt+4',
sop: 'alt+x',
next_cell_first: 'ctrl+shift+right',
previous_cell_first: 'ctrl+shift+left',
next_cell_second: 'ctrl+shift+down',
previous_cell_second: 'ctrl+shift+up',
scene_title: 'alt+w',
line_up: 'alt+a',
double_step: 'alt+s',
clear_search: 'alt+7'
};
const hotkeyLabels = {
message_input: '消息输入框',
search_input: '搜索框',
order_input: '订单输入框',
order_detail: '定位到订单详情',
auto_fill: '自动填写',
first_member: '第一个会员',
first_message: '第一条消息',
last_message: '最新的一条消息',
close_dialogue: '结束绘画',
yw: '处罚',
sop: '解决方案',
next_cell_first: '九宫格：下一个一级菜单项目',
previous_cell_first: '九宫格：上一个一级菜单项目',
next_cell_second: '九宫格：下一个二级菜单项目',
previous_cell_second: '九宫格：上一个二级菜单项目',
scene_title: '咨询场景',
line_up: '热线定位到排队',
double_step: '热线双步转',
clear_search: '清空搜索'
};
const hotkeySelectorConfig = {
message_input: ['.chat-input .editable'],
search_input: ['.ali-x-section-search input[type=search], .ah-solution-components-searcher--container .ant-input, .app-business-view .ant-input, input[placeholder="搜索问题"]'],
order_input: ['[placeholder="请输入订单编号/商品名称"]'],
order_detail: [''],
first_member: ['[class*=mc-infoDetail--], .chat-contact-item'], //'[class*=mc-infoDetail--], .chat-contact-item'],
first_message: ['.chat-message, .chat-system-message'],
last_message: ['.chat-message, .chat-system-message'],
close_dialogue: ['.tool-bar .close-session, .call-out-in .btn-orange, [data-tooltip="结束"]'],
sop: ['[class*=components-nodelist--container], [data-role="xsop-node-titleContainer"], .ali-x-section-title, .recommend-list, .tradeDetailView'],
next_cell_first: [''],
previous_cell_first: [''],
next_cell_second: [''],
previous_cell_second: [''],
scene_title: [''],
line_up: [''],
double_step: [''],
clear_search: []
};

const navLabels = {
"首页": "system/dashboard",
"通知": "system/notify",
"在线工作台": "system/IM",
"工单中心": "system/case-search-next",
"工单": "system/ticket-search",
"班务管理": "system/workshift",
"新云小家": "system/ehome-task",
"客户中心": "system/c360-view",
"标注": "system/annotation",
"服务中": "system/xdesk",
"设置": "system/xspace-bss",
"我的小程序……": "system/xapp-market",
"意见反馈": "xspace-feedback-btn",
"更多": "more-btn",
"网络状态": "xspace-network-status",
"刷新": "xspace-logo",
"我的小程序……": "xapp-container",
"反馈": "xfeedback",
"培训": "im-bot",
"常用链接": "bookmark",
"搜索": "search-bar-switch",
"我的状态": "im-widget",
"查看绩效": "workinfo-subtotal",
"我的信息": "profile-avatar"
};

let weekNames = {
sun: '周日',
mon: '周一',
tue: '周二',
wed: '周三',
thu: '周四',
fri: '周五',
sat: '周六'
};

export {
hotkeyConfig,
hotkeyLabels,
hotkeySelectorConfig,
navLabels,
weekNames
};
