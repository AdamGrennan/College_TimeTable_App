
export const GetDates = (dayOfWeek, year, month) => {
    const startDate = new Date(year, month - 1, 1);
    const dates = [];
  
   
    let dayOffset = (dayOfWeek - startDate.getDay() + 7) % 7;
    startDate.setDate(startDate.getDate() + dayOffset);
  
    while (startDate.getMonth() === month - 1) {
      dates.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 7);
    }
  
    return dates;
  };
  
  export const groupClassesByDate = (classes) => {
    const grouped = {};
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
  
    classes.forEach((classItem) => {
      const dayOfWeekMap = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 0,
      };
  
      const dates = GetDates(dayOfWeekMap[classItem.day], year, month);
  
      dates.forEach((date) => {
        const dateString = date.toDateString();
        if (!grouped[dateString]) {
          grouped[dateString] = [];
        }
        grouped[dateString].push(classItem);
      });
    });
  
    return grouped;
  };
  