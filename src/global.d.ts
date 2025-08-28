interface Window {
  versions: {
    chrome: () => string;
    node: () => string;
    electron: () => string;
    ping: () => Promise<string>;
  };
  listDDrive: { ldd: () => Promise<string[]> };
}

// Electron Forge 全局变量声明
declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string | undefined;
declare const MAIN_WINDOW_VITE_NAME: string;
