export default class Utils {
  static getImage(obj) {
    if (typeof obj === "string") {
      return obj;
    }
    let image = obj?.imageLinks || obj;
    return image?.medium || image?.small || image?.smallThumbnail;
  }
}
