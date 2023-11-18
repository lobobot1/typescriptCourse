import { ROLES, User } from './01-enum'

const currectUser: User = {
    username: 'nico',
    role: ROLES.USER,
}
export const checkAdminRole = (user: User, ...role:string[]): boolean => {
    return role.includes(user.role);
}

console.log(checkAdminRole(currectUser, ROLES.ADMIN, ROLES.USER))