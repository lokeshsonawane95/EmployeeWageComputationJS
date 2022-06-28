class EmployeePayrollData{
    id
    salary
    gender
    startDate

    constructor(...params){
        this.id = params[0]
        this.name = params[1]
        this.salary = params[2]
        this.gender = params[3]
        this.startDate = params[4]
    }

    get name() { return this._name }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name)){
            this._name = name
        }
        else throw "Name is in incorrect format"
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options)
        return "id : " + this.id + ", name : " + this.name + ", salary : " + this.salary + ", gender : " + this.gender +
        ", startDate : " + empDate 
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Lokesh", 30000)
console.log(employeePayrollData.toString())
try{
    employeePayrollData.name = "Loki"
}
catch(e){
    console.error(e)
}
console.log(employeePayrollData.toString())
let newEmployeePayrollData = new EmployeePayrollData(1, "Lokesh", 30000, "M", new Date())
console.log(newEmployeePayrollData.toString())