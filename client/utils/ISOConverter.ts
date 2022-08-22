export const ISOConverter = {
  convert: function (input: string) {
    if (!(typeof input === "string"))
      throw "ISODate, convert: input must be a string";
    let d = input.match(
      /^(\d{4})-?(\d{2})-?(\d{2})[T ](\d{2}):?(\d{2}):?(\d{2})(\.\d+)?(Z|(?:([+-])(\d{2}):?(\d{2})))$/i
    );
    if (!d) throw "ISODate, convert: Illegal format";
    return new Date(Date.UTC(Number(d[1]), Number(d[2]) - 1, Number(d[3])));
  },
  format: function (date: string, utc: boolean) {
    if (typeof date === "string") date = this.convert(date) as any;
    if (!(date as any instanceof Date))
      throw "ISODate, format: t is not a date object";

    let t = {
      FullYear: 0,
      Month: 0,
      Date: 0,
    };
    for (let key in t) {
      if (t.hasOwnProperty(key))
      // @ts-ignore
        t[key] = date["get" + (utc ? "UTC" : "") + key]();
    }

    return (
      t.Date + " " + this.month[t.Month].substring(0, 3) + " " + t.FullYear
    );
  },
  month: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ],
};