export default class Alias {
  static formatter(value: string): string {
    return value.replace(/ /g, "-").toLowerCase();
  }
}
