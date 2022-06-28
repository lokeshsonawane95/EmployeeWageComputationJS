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
        this.zip = params[5]
        this.email = params[6]
    }

    get name() { return this._name }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
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
    set gender(gender){
        let genderRegex = RegExp('^(M|F)$')
        if(genderRegex.test(gender)){
            this._gender = gender
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

    get zip() {return this._zip }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$')
        if(zipRegex.test(zip)){
            this._zip = zip
        }
        else throw "Zip is not in correct format"
    }

    get email() {return this._email }
    set email(email){
        let zipRegex = RegExp('^([A-Za-z]){3,}([_.+-]?)([0-9A-Za-z]{1,})@[a-z0-9]+[.](co|net|gov|com|net){0,1}([.]((com)|([a-z]{2}){0,1})){0,1}$')
        if(zipRegex.test(email)){
            this._email = email
        }
        else throw "email is not in correct format"
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options)
        return "id : " + this.id + ", name : " + this.name + ", salary : " + this.salary + ", gender : " + this.gender +
        ", startDate : " + empDate + ", zip : " + this.zip + ", email : " + this.email
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Lokesh", 30000, "M", new Date(), 411058, "lokesh.sonawane@gmail.com")
console.log(employeePayrollData.toString())
try{
    employeePayrollData.id = 4
    employeePayrollData.name = "Mani";
    employeePayrollData.salary = 45000
    employeePayrollData.gender = "F"
    employeePayrollData.zip = 411052
    employeePayrollData.email = "lokesh.sonawane.son@gmail.com"
}
catch(e){
    console.error(e)
}
console.log(employeePayrollData.toString())