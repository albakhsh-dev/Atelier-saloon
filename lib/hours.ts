import { BranchHours } from '@/types/salon';

export interface BranchStatus {
  isOpen: boolean;
  statusText: string;
  detailText: string;
  todaySchedule?: BranchHours;
}

const DAYS_OF_WEEK: ('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
 * Parses time string like "09:00" or "20:00" into minutes from midnight
 */
function parseTimeToMinutes(timeStr: string): number {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + (minutes || 0);
}

/**
 * Formats 24hr time "19:00" into friendly "7:00 PM"
 */
export function formatFriendlyTime(timeStr: string): string {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  const displayMin = m ? `:${m.toString().padStart(2, '0')}` : ':00';
  return `${displayHour}${displayMin} ${period}`;
}

/**
 * Calculates whether a branch is open right now, and returns formatted labels.
 */
export function getBranchStatus(hours: BranchHours[], now = new Date()): BranchStatus {
  const currentDayIndex = now.getDay();
  const currentDayName = DAYS_OF_WEEK[currentDayIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const todayHours = hours.find((h) => h.day === currentDayName);

  if (!todayHours || todayHours.isClosed) {
    // Look for next open day
    const nextDay = findNextOpenDay(hours, currentDayIndex);
    return {
      isOpen: false,
      statusText: 'Closed Today',
      detailText: nextDay ? `Opens ${nextDay.day} at ${formatFriendlyTime(nextDay.open)}` : 'Closed',
      todaySchedule: todayHours,
    };
  }

  const openMinutes = parseTimeToMinutes(todayHours.open);
  const closeMinutes = parseTimeToMinutes(todayHours.close);

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    // It is open right now
    const minutesLeft = closeMinutes - currentMinutes;
    if (minutesLeft <= 60) {
      return {
        isOpen: true,
        statusText: 'Open Now · Closes soon',
        detailText: `Closes at ${formatFriendlyTime(todayHours.close)} (${minutesLeft}m left)`,
        todaySchedule: todayHours,
      };
    }
    return {
      isOpen: true,
      statusText: 'Open Now',
      detailText: `Closes at ${formatFriendlyTime(todayHours.close)}`,
      todaySchedule: todayHours,
    };
  } else if (currentMinutes < openMinutes) {
    // Before opening today
    return {
      isOpen: false,
      statusText: 'Closed Now',
      detailText: `Opens today at ${formatFriendlyTime(todayHours.open)}`,
      todaySchedule: todayHours,
    };
  } else {
    // After closing today, find tomorrow's schedule
    const nextDay = findNextOpenDay(hours, currentDayIndex);
    return {
      isOpen: false,
      statusText: 'Closed for the day',
      detailText: nextDay ? `Opens ${nextDay.day === DAYS_OF_WEEK[(currentDayIndex + 1) % 7] ? 'tomorrow' : nextDay.day} at ${formatFriendlyTime(nextDay.open)}` : 'Closed',
      todaySchedule: todayHours,
    };
  }
}

function findNextOpenDay(hours: BranchHours[], fromDayIndex: number): BranchHours | undefined {
  for (let i = 1; i <= 7; i++) {
    const nextIndex = (fromDayIndex + i) % 7;
    const nextDayName = DAYS_OF_WEEK[nextIndex];
    const match = hours.find((h) => h.day === nextDayName && !h.isClosed);
    if (match) return match;
  }
  return undefined;
}
