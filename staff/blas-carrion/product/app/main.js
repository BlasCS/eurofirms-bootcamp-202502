var body = document.querySelector('body')


function buildLandingView() {
    var landingView = document.createElement('div')

    var logoHeading = Document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

   

    var orText = document.createNode(' or ')
    landingView.appendChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')
    
    var registerForm = document.createElement('form')

    var logoHeading = Document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)


    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label') 
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    var nameImput = document.createElement('input')
    nameImput.type = 'text'
    nameImput.id = 'name'
    nameImput.name = 'name'
    nameImput.placeholder = 'your full name'
    nameField.appendChild(nameLabel)
    nameImput.appendChild(nameImput)
    registerForm.appendChild(nameField)
    
    var mailField = document.createElement('div')
    var mailLabel = document.createElement('label')
    mailLabel.htmlFor = 'email'
    var mailText = document.createTextNode('E-mail')
    mailLabel.appendChild(mailText)
    var mailImput = document.createElement('input')
    mailImput.type = 'text'
    mailImput.id = 'email'
    mailImput.name = 'email'
    mailImput.placeholder = 'your e-mail'
    mailField.appendChild(mailLabel)
    mailImput.appendChild(mailImput)
    registerForm.appendChild(mailField)

    var userField = document.createElement('div')
    var userLabel = document.createElement('label')
    userLabel.htmlFor = 'user'
    var userText = document.createTextNode('UserName')
    userLabel.appendChild(userText)
    var userImput = document.createElement('input')
    userImput.type = 'text'
    userImput.id = 'user'
    userImput.name = 'user'
    userImput.placeholder = 'your user'
    userField.appendChild(userLabel)
    userImput.appendChild(userImput)
    registerForm.appendChild(userField)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordImput = document.createElement('input')
    passwordImput.type = 'text'
    passwordImput.id = 'password'
    passwordImput.name = 'password'
    passwordImput.placeholder = 'your password'
    passwordField.appendChild(passwordLabel)
    passwordImput.appendChild(passwordImput)
    registerForm.appendChild(passwordField)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    registerForm.appendChild(loginLink)

    var spaceText = document.createNode('    ')
    registerForm.appendChild(spaceText)  

    var submitButton = document.createElement('button')
    submitButton.type = 'submit'
    var submitText = document.createTextNode('Register')
    submitButton.appendChild(submitText)
    registerForm.appendChild(submitButton)



    registerView.appendChild(registerForm)

    return registerView
}


function builLoginView() {

    var loginView = document.createElement('div')
    
    var loginForm = document.createElement('form')

    var logoHeading = Document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    var userField = document.createElement('div')
    var userLabel = document.createElement('label')
    userLabel.htmlFor = 'user'
    var userText = document.createTextNode('UserName')
    userLabel.appendChild(userText)
    var userImput = document.createElement('input')
    userImput.type = 'text'
    userImput.id = 'user'
    userImput.name = 'user'
    userField.appendChild(userLabel)
    userImput.appendChild(userImput)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordImput = document.createElement('input')
    passwordImput.type = 'text'
    passwordImput.id =' password'
    passwordImput.name = 'password'
    passwordField.appendChild(passwordLabel)
    passwordImput.appendChild(passwordImput)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    loginView.appendChild(registerLink)

    var spaceText = document.createNode('    ')
    loginView.appendChild(spaceText)  

    var submitButtonButton = document.createElement('button')
    submitButton.type = 'submit'
    var submitText = document.createTextNode('Login')
    submitButton.appendChild(submitText)
    loginFormForm.appendChild(submitButton)
   

    loginView.appendChild(loginForm)

    return loginView
}

function buildHomeView() {
    var homeView = document.createElement('div')

    var logoHeading = Document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)

   
    var orText = document.createNode(' Hello, home! ')
    homeView.appendChild(orText)

    return homeView
}

//var LandingView = buildLandingView()
//body.appendChild(landingView)
var registerView = buildRegisterView()
body.appendChild(registerView)
