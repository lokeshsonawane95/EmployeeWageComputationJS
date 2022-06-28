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
let empDailyHrsAndWageArr = new Array()
let empDailyWageMap = new Map()
let empDailyHrsMap = new Map()
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3
    let empHrs = getWorkingHours(empCheck)
    totalEmpHrs += empHrs
    empDailyWageArr.push(calcDailyWage(empHrs))
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs))
    empDailyHrsMap.set(totalWorkingDays, empHrs)
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString(){
                return "\nDay " + this.dayNum + " => working hours is " + this.dailyHours + " and wage earned : " +this.dailyWage
            },
        }
    )
}

//7A Calc total wage using array forEach traversal or reduce method
let totalEmpWage = 0
function sum(dailyWage){
    totalEmpWage += dailyWage
}
empDailyWageArr.forEach(sum)
console.log("7A Total Days : " + totalWorkingDays + " Total Hours : " + totalEmpHrs + " Employee Wage : " + totalEmpWage)

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
console.log("7B Daily Wage map : ")
console.log(mapDayWithWageArray)

//7C Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage)
console.log("7C Daily Wage filter when fulltimewage earned")
console.log(fullDayWageArray)

//7D Find the first occurrence when full time wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
console.log("7D First time fulltime wage was earned on day : " + mapDayWithWageArray.find(findFulltimeWage))

//7E Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
console.log("7E Check all element have full time wage : " + fullDayWageArray.every(isAllFulltimeWage))

//7F cCheck if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80")
}
console.log("7F Check if any part time wage : " + mapDayWithWageArray.some(isAnyPartTimeWage))

//7G Find the number of days theh employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("7G Number of days employee worked : " + empDailyWageArr.reduce(totalDaysWorked, 0))

//UC8 Store daily wage in a map
console.log(empDailyWageMap)
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage
}
console.log("UC8 Employeee wage map total Hours : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0))

//UC9 Arrow functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal
}
let count = 0
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0)
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0)
console.log("UC9 Employee Wage with arrow function : \nTotal hours : " + totalHours + " total wages : " + totalSalary)

let nonWorkingDays = new Array()
let partWorkingDays = new Array()
let fullWorkingDays = new Array()
empDailyHrsMap.forEach((value, key,map) => {
    if(value == 8) fullWorkingDays.push(key)
    else if(value == 4) partWorkingDays.push(key)
    else nonWorkingDays.push(key)
})
console.log("Full working days for employees : " + fullWorkingDays)
console.log("Part working days for employees : " + partWorkingDays)
console.log("Non working days for employees : " + nonWorkingDays)

//UC10 Object creation
console.log("UC10 Showing daily hours worked and wage earned : " + empDailyHrsAndWageArr)