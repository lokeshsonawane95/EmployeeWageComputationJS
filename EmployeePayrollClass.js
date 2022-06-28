class EmployeePayrollData{
    // id
    // salary
    // gender
    // startDate

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

    get id() { return this._id }
    set id(id){
        let idRegex = RegExp('^[1-9]+$')
        if(idRegex.test(id)){
            this._id = id
        }
        else throw "id is not in correct format"
    }

    get gender() { return this._gender }
    set gender(gen){
        let genderRegex = RegExp('^(M|F)$')
        if(genderRegex.test(gen)){
            this._gender = gen
        }
        else throw "Gender is not in correct format"
    }

    get startDate() { return this._startDate }
    set startDate(startDate){
        let currentDate = new Date()
        if(currentDate - startDate >= 0){
            this._startDate = startDate
        }
        else throw "startDate is not correct"
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options)
        return "id : " + this.id + ", name : " + this.name + ", salary : " + this.salary + ", gender : " + this.gender +
        ", startDate : " + empDate 
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Lokesh", 30000, "M", new Date())
console.log(employeePayrollData.toString())
try{
    employeePayrollData.id = 4
    employeePayrollData.name = "Mani";
    employeePayrollData.salary = 45000
    employeePayrollData.gender = "k"
}
catch(e){
    console.error(e)
}
console.log(employeePayrollData.toString())