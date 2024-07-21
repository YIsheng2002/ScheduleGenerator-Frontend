import React from 'react';
import { extractSchedule } from '../utils/extractSchedule';
import './Schedule.css';

const scheduleData = {
    "schedule": {
      "Monday": [
        {
          "time": "7am - 7:30am",
          "activity": "Brisk walking"
        },
        {
          "time": "7:30am - 8am",
          "activity": "Breakfast (Oatmeal with berries and nuts)"
        },
        {
          "time": "1pm - 1:30pm",
          "activity": "Lunch (Salmon with quinoa and salad)"
        },
        {
          "time": "5pm - 6pm",
          "activity": "Yoga class"
        },
        {
          "time": "7pm - 7:30pm",
          "activity": "Dinner (Chicken stir-fry with brown rice)"
        }
      ],
      "Tuesday": [
        {
          "time": "7am - 7:30am",
          "activity": "Brisk walking"
        },
        {
          "time": "7:30am - 8am",
          "activity": "Breakfast (Greek yogurt with fruits and granola)"
        },
        {
          "time": "1pm - 1:30pm",
          "activity": "Lunch (Lentil soup with whole-wheat bread)"
        },
        {
          "time": "6pm - 7pm",
          "activity": "Grocery shopping"
        },
        {
          "time": "7:30pm - 8pm",
          "activity": "Dinner (Vegetable curry with brown rice)"
        }
      ],
      "Wednesday": [
        {
          "time": "7am - 7:30am",
          "activity": "Brisk walking"
        },
        {
          "time": "7:30am - 8am",
          "activity": "Breakfast (Scrambled eggs with whole-wheat toast and avocado)"
        },
        {
          "time": "1pm - 1:30pm",
          "activity": "Lunch (Tuna salad sandwich on whole-wheat bread)"
        },
        {
          "time": "5pm - 6pm",
          "activity": "Swimming"
        },
        {
          "time": "7pm - 7:30pm",
          "activity": "Dinner (Baked chicken with roasted vegetables)"
        }
      ],
      "Thursday": [
        {
          "time": "7am - 7:30am",
          "activity": "Brisk walking"
        },
        {
          "time": "7:30am - 8am",
          "activity": "Breakfast (Smoothie with fruits, vegetables, and protein powder)"
        },
        {
          "time": "1pm - 1:30pm",
          "activity": "Lunch (Leftover baked chicken and roasted vegetables)"
        },
        {
          "time": "7pm - 8pm",
          "activity": "Relaxation activity (reading, taking a bath)"
        },
        {
          "time": "8pm - 8:30pm",
          "activity": "Dinner (Fish with steamed vegetables and quinoa)"
        }
      ],
      "Friday": [
        {
          "time": "7am - 7:30am",
          "activity": "Brisk walking"
        },
        {
          "time": "7:30am - 8am",
          "activity": "Breakfast (Whole-wheat pancakes with fruits and maple syrup)"
        },
        {
          "time": "1pm - 1:30pm",
          "activity": "Lunch (Vegetarian chili with brown rice)"
        },
        {
          "time": "6pm - 7pm",
          "activity": "Family time"
        },
        {
          "time": "7:30pm - 8pm",
          "activity": "Dinner (Homemade pizza with whole-wheat crust and plenty of vegetables)"
        }
      ],
      "Saturday": [
        {
          "time": "Morning",
          "activity": "Visit local farmer's market and prepare meals for the week"
        },
        {
          "time": "Afternoon",
          "activity": "Outdoor activity with family (hiking, biking)"
        },
        {
          "time": "Evening",
          "activity": "Relax and enjoy free time"
        }
      ],
      "Sunday": [
        {
          "time": "Morning",
          "activity": "Meal prep for the week"
        },
        {
          "time": "Afternoon",
          "activity": "Relaxing activity (reading, spending time in nature)"
        },
        {
          "time": "Evening",
          "activity": "Prepare for the week ahead and get enough sleep"
        }
      ],
      "Note": "This is just a sample schedule. Adjust it based on your own preferences, dietary needs, and available time. Make sure to stay hydrated throughout the day by drinking plenty of water. Consult with a healthcare professional or registered dietitian for personalized advice."
    }
  };

const Schedule: React.FC = () => {
  const schedule = extractSchedule(scheduleData);

  return (
    <div className="schedule-page">
      <h1 className="schedule-title">Weekly Schedule</h1>
      <div className="table-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(schedule).map(([day, activities]) => (
              <React.Fragment key={day}>
                {activities.map((activity, index) => (
                  <tr key={`${day}-${index}`}>
                    {index === 0 && (
                      <td className="day-column" rowSpan={activities.length}>
                        {day}
                      </td>
                    )}
                    <td className="time-column">{activity.time}</td>
                    <td className="activity-column">{activity.activity}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="schedule-note">{scheduleData.schedule.Note}</p>
    </div>
  );
};

export default Schedule;