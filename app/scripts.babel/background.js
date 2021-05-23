'use strict';
import { injectCustomJs } from './tools/index.js';
chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion);
});
injectCustomJs();

// browserAction标记
chrome.browserAction.setBadgeText({ text: 'new' });
chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });

// 右键菜单
chrome.contextMenus.create({
  type: 'normal', // 类型，可选：["normal", "checkbox", "radio", "separator"]，默认 normal
	title: 'markdown', // 显示的文字，除非为“separator”类型否则此参数必需，如果类型为“selection”，可以使用%s显示选定的文本
	contexts: ['page'], // 上下文环境，可选：["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"]，默认page
	onclick: function(){
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: 'images/icon-128.png',
      title: '这是标题',
      message: '您刚才点击了自定义右键菜单！'
    });
  }, // 单击时触发的方法
	// parentId: 1, // 右键菜单项的父菜单项ID。指定父菜单项将会使此菜单项成为父菜单项的子菜单
	// documentUrlPatterns: 'https://*.baidu.com/*' // 只在某些页面显示此右键菜单
});

console.log(chrome);


