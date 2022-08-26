import { useState, useEffect } from "react";

const useTimeConvert = (createdAt: Date) => {
  useEffect(() => {
    convertTime(createdAt);
  });

  const [createTime, setCreateTime] = useState("");

  const convertTime = (createdAt: Date) => {
    let month = [
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
    ];
    let str = "";
    let date = new Date(createdAt);
    let current = new Date(Date.now());

    if (
      current.getFullYear() === date.getFullYear() &&
      current.getMonth() === date.getMonth() &&
      current.getDay() === date.getDay()
    ) {
      str = "сегодня в " + date.getHours() + ":" + date.getMinutes();
    } else if (
      current.getFullYear() === date.getFullYear() &&
      current.getMonth() === date.getMonth() &&
      current.getDate() - 1 === date.getDate()
    ) {
      str = "вчера в " + date.getHours() + ":" + date.getMinutes();
    } else if (
      current.getFullYear() === date.getFullYear() &&
      current.getMonth() === date.getMonth() &&
      current.getDate() - 2 === date.getDate()
    ) {
      str = "позавчера в " + date.getHours() + ":" + date.getMinutes();
    } else {
      str =
        date.getDate() +
        " " +
        month[date.getMonth()] +
        "а " +
        " в " +
        date.getHours() +
        ":" +
        date.getMinutes();
    }
    setCreateTime(str);
  };
  return { createTime };
};

export default useTimeConvert;
