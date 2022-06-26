//UC1
const IS_ABSENT  = 0

let empCheck = Math.floor(Math.random() * 10) % 2
if(empCheck == IS_ABSENT){
    console.log("Employee s Absent")
    return
}else{
    console.log("Employee is Present")
}