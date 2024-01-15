const defaultUser = {
    name: '',
    email: '',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'fulano',
    email: 'fulano@mail.com'
}

const adm1 = {
    ...defaultUser,
    name: 'Admin Cicrano',
    email: 'adm@mail.com',
    level: 2
}

console.log(user1);
console.log(adm1);