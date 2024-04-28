import { BrowserWindow } from "electron";
module.exports = {
  minimize: global.share.ipcMain.handle("minimize", async () => {
    try {
      BrowserWindow.getFocusedWindow().minimize();
    } catch (err) {
      console.error(err);
    }
  }),
};
