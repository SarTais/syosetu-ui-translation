const DEFAULT_DATE_FORMAT = 'MM/DD/YYYY';

const dateFormat = import.meta.env.VITE_SYOSETU_DATE_FORMAT || DEFAULT_DATE_FORMAT;

export function formatConfiguredDate(year: string, month: string, day: string): string {
  const paddedMonth = month.padStart(2, '0');
  const paddedDay = day.padStart(2, '0');

  return dateFormat.replace(/YYYY|YY|MM|mm|M|DD|dd|D/g, (token) => {
    switch (token) {
      case 'YYYY':
        return year;
      case 'YY':
        return year.slice(-2);
      case 'MM':
      case 'mm':
        return paddedMonth;
      case 'M':
        return String(Number(month));
      case 'DD':
      case 'dd':
        return paddedDay;
      case 'D':
        return String(Number(day));
      default:
        return token;
    }
  });
}
