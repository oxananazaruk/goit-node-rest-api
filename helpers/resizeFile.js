const Jimp = require("jimp");
const HttpError = require("./HttpError");

// const resizeFile = (filePath, newPath) => {
//   Jimp.read(filePath)
//     .then((image) => {
//       return image.resize(250, 250);
//     })
//     .then((newImage) => {
//       return newImage.write(newPath);
//     })
//     .catch((err) => {
//       throw HttpError(500);
//     });
// };

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
