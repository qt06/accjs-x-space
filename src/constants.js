﻿const hotkeyConfig = {
message_input: 'alt+1',
auto_fill: 'alt+v',
try_to_locate: 'alt+g',
first_member: 'alt+q',
last_message: 'alt+z',
close_dialogue: 'alt+c',
yw: 'alt+4',
fc: 'alt+3',
search_input: 'alt+2',
sop: 'alt+x'
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
sop: '解决方案'
};
const hotkeySelectorConfig = {
message_input: ['.chat-input .editable'],
first_member: ['.chat-contact-item'],
search_input: ['.ali-x-section-search input[type=search], .ah-solution-components-searcher--container .ant-input, .app-business-view .ant-input'],
close_dialogue: ['[data-tooltip="结束"]'],
last_message: ['.chat-message, .chat-system-message'],
sop: ['[data-role="xsop-node-titleContainer"], .ali-x-section-title, .recommend-list, .tradeDetailView']
};

const navLabels = {
"首页": "system/dashboard",
"通知": "system/notify",
"在线工作台": "system/IM",
"工单": "system/ticket-search",
"班务管理": "system/workshift",
"新云小家": "system/ehome-task",
"标注": "system/annotation",
"设置": "system/xspace-bss",
"我的小程序……": "system/xapp-market",
"意见反馈": "xspace-feedback-btn",
"网络状态": "xspace-network-status",
"刷新": "xspace-logo",
"我的小程序……": "xapp-container",
"反馈": "xfeedback",
"培训": "im-bot",
"常用链接": "bookmark",
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
const isRun = true;

export {
hotkeyConfig,
hotkeyLabels,
hotkeySelectorConfig,
navLabels,
weekNames,
isRun
};
