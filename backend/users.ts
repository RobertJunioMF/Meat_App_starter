export class User {
  constructor(public email: string,
              public name: string,
              private password: string){}

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password
  }
}

export const users = {
  "angela@gmail.com": new User('angela@gmail.com', 'Angela', '123'),
  "evangeline@gmail.com": new User('evangeline@gmail.com', 'Evangeline', '123'),
}
