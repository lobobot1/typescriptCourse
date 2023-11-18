enum ROLES{
    ADMIN = 'ADMIN',
    USER = 'USER',
    SELLER = 'SELLER'
}

type User = {
    username: string;
    role: ROLES;
}

const nicoUser: User = {
    username: 'nico',
    role: ROLES.USER,
}

console.log(nicoUser)