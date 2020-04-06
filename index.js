const fs = require('fs')
const axios    = require ('axios')
const inquirer = require('inquirer')
const prompt   = inquirer.createPromptModule()
const buildpage = data => {
    const html = `userId: ${data}
        At least one badge
        Project title
        Description
        Table of Contents
        Installation
        Usage
        License
        Contributing
        Tests
        Questions
        
        User GitHub profile picture
        User GitHub email`    
    fs.writeFile('README.md', html, (e) => {
        if (e) {
            console.log(e)
        }
})
}





inquirer.prompt({
    type: 'input',
    name: 'UserName',
    message: "What's your name?"    
})
.then(response => {    
    // axios.get()
    console.log(response)
    buildpage(response.UserName)

})

