const hotkeyConfig = {
message_input: 'alt+1',
auto_fill: 'alt+v',
try_to_locate: 'alt+g',
first_member: 'alt+q',
last_message: 'alt+z',
close_dialogue: 'alt+c',
yw: 'alt+4',
fc: 'alt+3',
search_input: 'alt+2',
sop: 'alt+x',
next_cell_first: 'ctrl+right',
previous_cell_first: 'ctrl+left',
next_cell_second: 'ctrl+down',
previous_cell_second: 'ctrl+up',
line_up: 'alt+a'
};
const hotkeyLabels = {
message_input: '消息输入框',
auto_fill: '自动填写',
try_to_locate: '尝试自动定位搜索结果',
first_member: '第一个会员',
last_message: '最新的一条消息',
close_dialogue: '结束绘画',
yw: '处罚',
fc: '方寸',
search_input: '搜索框',
sop: '解决方案',
next_cell_first: '九宫格：下一个一级菜单项目',
previous_cell_first: '九宫格：上一个一级菜单项目',
next_cell_second: '九宫格：下一个二级菜单项目',
previous_cell_second: '九宫格：上一个二级菜单项目',
line_up: '热线定位到排队'
};
const hotkeySelectorConfig = {
message_input: ['.chat-input .editable'],
first_member: ['[class*=mc-infoDetail--], .chat-contact-item'], //'[class*=mc-infoDetail--], .chat-contact-item'],
search_input: ['.ali-x-section-search input[type=search], .ah-solution-components-searcher--container .ant-input, .app-business-view .ant-input, input[placeholder="搜索问题"]'],
close_dialogue: ['.tool-bar .close-session, .call-out-in .btn-orange, [data-tooltip="结束"]'],
last_message: ['.chat-message, .chat-system-message'],
sop: ['[class*=components-nodelist--container], [data-role="xsop-node-titleContainer"], .ali-x-section-title, .recommend-list, .tradeDetailView'],
next_cell_first: [''],
previous_cell_first: [''],
next_cell_second: [''],
previous_cell_second: [''],
line_up: ['']
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
