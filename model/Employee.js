module.exports = class Employee {
    constructor(name, role, email, id) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getEmail() {
        return this.email;
    }

    getEmail() {
        return this.id;
    }
};