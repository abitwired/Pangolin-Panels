module.exports = {
  create: global.share.ipcMain.handle("create", async () => {
    try {
        
    } catch (err) {
      console.error(err);
    }
  }),
};
