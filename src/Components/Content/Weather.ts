export const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 1,
    month: 'Sun',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 2,
    month: 'Mon',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 3,
    month: 'Tue',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 4,
    month: 'Wed',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 5,
    month: 'Fri',
  },
  {
    seoul: 8,
    month: 'Sat',
  },
];

export function valueFormatter(value: number | null) {
  return `${value}mm`;
}