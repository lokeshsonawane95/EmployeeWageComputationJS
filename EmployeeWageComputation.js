//UC7
const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS
        case IS_FULL_TIME:
            return FULL_TIME_HOURS
        default:
            return 0
    }
}
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR
}
const MAX_HRS_IN_MONTH = 160
const NUM_OF_WORKING_DAYS = 20
let totalEmpHrs = 0
let totalWorkingDays = 0
let empDailyWageArr = new Array()
let empDailyWageMap = new Map()
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3
    let empHrs = getWorkingHours(empCheck)
    totalEmpHrs += empHrs
    empDailyWageArr.push(calcDailyWage(empHrs))
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs))
}

//7A Calc total wage using array forEach traversal or reduce method
let totalEmpWage = 0
function sum(dailyWage){
    totalEmpWage += dailyWage
}
empDailyWageArr.forEach(sum)
console.log("Total Days : " + totalWorkingDays + " Total Hours : " + totalEmpHrs + " Employee Wage : " + totalEmpWage)

function totalWages(totalWage, dialyWage){
    return totalWage + dialyWage
}
console.log("Employee Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0))

//7B Show the day along with daily wage using array map helper function
let dailyCntr = 0
function mapDayWithWage(dailyWage){
    dailyCntr++
    return dailyCntr + " = " + dailyWage
}
let mapDayWithWageArray = empDailyWageArr.map(mapDayWithWage)
console.log("Daily Wage map : ")
console.log(mapDayWithWageArray)

//7C Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage)
console.log("Daily Wage filter when fulltimewage earned")
console.log(fullDayWageArray)

//7D Find the first occurrence when full time wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
console.log("First time fulltime wage was earned on day : " + mapDayWithWageArray.find(findFulltimeWage))

//7E Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
console.log("Check all element have full time wage : " + fullDayWageArray.every(isAllFulltimeWage))

//7F cCheck if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80")
}
console.log("Check if any part time wage : " + mapDayWithWageArray.some(isAnyPartTimeWage))

//7G Find the number of days theh employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days employee worked : " + empDailyWageArr.reduce(totalDaysWorked, 0))

// UC8 Store daily wage in a map
console.log(empDailyWageMap)
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage
}
console.log("Employeee wage map total Hours : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0))