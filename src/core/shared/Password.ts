export default class Password {
  static create(size: number = 8): string {
    const lower = "abcdefghijklmnopqrstuvxwyz";
    const upper = lower.toUpperCase();
    const specials = "!@#$%&*";
    const numbers = "0123456789";

    const groups = [lower, upper, numbers, specials];
    const password = [];

    for (let i = 0; i < size; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      password.push(group[Math.floor(Math.random() * groups.length)]);
    }

    return password.join("");
  }
}
