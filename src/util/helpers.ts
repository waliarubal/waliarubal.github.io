export function calculateYears(date: Date): number {
  let ageDifMs = Date.now() - date.getTime();
  let ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function loadScript(url: string): void {
  let script = document.createElement("script");
  script.src = url;
  script.async = false;
  document.body.appendChild(script);
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonthName(date: Date) {
  return MONTH_NAMES[date.getMonth()];
}
