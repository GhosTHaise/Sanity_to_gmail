const schedule = require("node-schedule");

const jobCallBack = () => {
    console.log("Mande")
}

/** 
*@param {{}} timeObject - Enter time to execute job like {sec,min,hr,day,month,day_week}
*@return {string}
*/
const createDate = (timeObject) => {
    let default_time = "* * * * * *";
    const Key_len = Object.keys(timeObject).length;

    if( Key_len <= 0)
            return default_time;

    const ajust_time = () => {
        let time = default_time.split(" ");
        
        for(let cursor in timeObject){
            if(cursor == "sec"){
                time[0] = `${timeObject.sec}`
            }else if(cursor == "min"){
                time[1] = `${timeObject.min}`
            }else if(cursor == "hr"){
                time[2] = `${timeObject.hr}`
            }else if(cursor == "day"){
                time[3] = `${timeObject.day}`
            }else if(cursor == "month"){
                time[4] = `${timeObject.month}`
            }else if(cursor == "day_week}"){
                time[5] = `${timeObject.day_week}`
            }
        }
        return time.join(" ");
    }
    return ajust_time()
}

/**
 * 
 * @param {{}} time 
 */
exports.initScheduleJobs = (time) => {
    const job = schedule.scheduleJob(
        createDate(time),
        jobCallBack
    )
}