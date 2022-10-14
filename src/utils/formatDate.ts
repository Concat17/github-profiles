import { DateTime } from "luxon";

export const formatDate = (isoDate: string): string => {
  return DateTime.fromISO(isoDate).toFormat("yyyy-LL-dd");
};
