import {navbar} from './navbar';
import {status} from './status';
import {misc} from './misc';
import {im} from './im';
import {ticket} from './ticket';
import {notification} from './notification';
import {workshift} from './workshift';

function workBenchProcess() {
let hash = window.location.hash;

if(hash.includes('system/workshift')) {
workshift();
}

if(hash.includes('system/ticket-search')) {
ticket();
}

if(hash.includes('system/notify')) {
notification();
}

if(hash.includes('system/IM')) {
im();
}

navbar();
status();
misc();
}

export default workBenchProcess;
export {workBenchProcess};
