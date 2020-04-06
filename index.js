const fs = require('fs')
// const axios    = require ('axios')
const inquirer = require('inquirer')
const prompt   = inquirer.createPromptModule()
const buildpage = (data, filename) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Team</h1>
        <p> Name:   ${data.name}</p>
        <p> Role:   ${data.role}</p>
        <p> school: ${data.school}</p>
    </body>
    </html>`    
    fs.writeFile(filename, html, (e) => {
        if (e) {
            console.log(e)
        }
})
}

class Employee {
    constructor (name, id, title, role){
        this.name  = name
        this.id    = id
        this.title = title
        this.role  = role
    }
}

class Manager extends Employee{
    constructor (name, id, title, role, officeNumber){
        super(name, id, title, role)
        this.officeNumber  = officeNumber
    }
}

class Engineer extends Employee{
    constructor (name, id, title, role, github){
        super(name, id, title, role)
        this.github   = github
    }
}

class Intern extends Employee{
    constructor (name, id, title, role, school){
        super(name, id, title, role)
        this.school   = school
    }
}


inquirer.prompt([
{
    type: 'input',
    name: 'name',
    message: "What's their name?"    
},
{
    type: 'input',
    name: 'role',
    message: "What's their role?"    
},
{
    type: 'input',
    name: 'intern',
    message: "name of school, if they are an intern?"    
}
])
.then(response => {
    // if (intern){

    // }
    console.log(response)
    // Logic to build each page
    buildpage(response, 'engineer.html')
})





//     console.log(response)
//     buildpage(response.UserName)

// })

