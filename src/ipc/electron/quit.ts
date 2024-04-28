import { app } from "electron";

module.exports = {
  quit: global.share.ipcMain.handle("quit", async () => {
    try {
      app.quit();
    } catch (err) {
      console.error(err);
    }
  }),
};
