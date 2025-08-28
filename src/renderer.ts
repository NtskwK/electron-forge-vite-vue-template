/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";

console.log(
  '👋 This message is being logged by "renderer.ts", included via Vite'
);

const information = document.getElementById("info");

// 等待 DOM 完全加载并检查 window.versions 是否可用
const initializeApp = () => {
  information.innerText = `本应用正在使用 Chrome (v${window.versions.chrome()}),
     Node.js (v${window.versions.node()}), 和 
     Electron (v${window.versions.electron()})`;

  const func = async () => {
    try {
      const response = await window.versions.ping();
      console.log(response); // 打印 'pong'
    } catch (error) {
      console.error("Error calling ping:", error);
    }
  };

  func();
};

// 确保 DOM 已加载
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
