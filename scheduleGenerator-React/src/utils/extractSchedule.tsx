
interface ScheduleItem {
    time: string;
    activity: string;
  }
  
interface Schedule {
    [day: string]: ScheduleItem[];
}
  
export function extractSchedule(scheduleData: any): Schedule {
    const { schedule } = scheduleData;
    const extractedSchedule: Schedule = {};
  
    for (const [day, activities] of Object.entries(schedule)) {
      if (Array.isArray(activities)) {
        extractedSchedule[day] = activities as ScheduleItem[];
      }
    }
  
    return extractedSchedule;
}