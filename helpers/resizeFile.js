const Jimp = require("jimp");
const HttpError = require("./HttpError");

const resizeFile = async (filePath, newPath) => {
  try {
    const avatar = await Jimp.read(filePath);
    await avatar.resize(250, 250);
    await avatar.write(newPath);
  } catch {
    throw HttpError(500, "Image processing error");
  }
};

module.exports = resizeFile;
