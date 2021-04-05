import { Injectable } from '@nestjs/common';
import { IUser } from './../common/model/interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: IUser[] = [
    {
      userId: 1,
      userName: 'john',
      password: '123456',
    },
    {
      userId: 2,
      userName: 'maria',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.userName === username);
  }
}
