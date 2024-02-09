const Jimp = require("jimp");
const HttpError = require("./HttpError");

const resizeFile = (filePath, newPath) => {
  Jimp.read(filePath)
    .then((image) => {
      return image.resize(250, 250);
    })
    .then((newImage) => {
      return newImage.write(newPath);
    })
    .catch((err) => {
      throw HttpError(500);
    });
};

module.exports = resizeFile;
