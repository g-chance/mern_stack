const express = require('express');
const app = express();
const faker = require('faker')


class User {
    constructor() {
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone_number = faker.phone.phoneNumber();
        this.email = faker.random.word();
        this.password = faker.random.word();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.city = faker.address.city();
    }
}

app.get('/api/users/new', (req, res) => {
    const bob = new User()
    const pete = new User()
    
    people = [bob, pete]
    return res.json( users = people )
})

app.get('/api/companies/new', (req, res) => {
    const thedoj = new Company()
    return res.json( company = thedoj)
})

app.get('/api/user/company', (req, res) => {
    const co = new Company();
    const user = new User();

    both = [co,user];
    return res.json( couser = both )
})

const server = app.listen(8000, () =>
    console.log("yay")
)