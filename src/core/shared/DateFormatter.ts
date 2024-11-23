export default class DateFormatter {
  static formatterToString(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");
    const d = date ?? new Date();
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  static formatterToDate(date: string): Date {
    const [year, month, day] = date.split("T")[0].split("-");
    const [hour, minute] = date.split("T")[0].split(":");

    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
}
