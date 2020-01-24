import { Injectable } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';

@Injectable()
export class UserRepository {
    db: UserViewModel[] = [
        new UserViewModel('JAO', 'JOAO', '123'),
    ];

    getUsers() {
        return this.db;
    }

    createUser(newUser: UserViewModel) {
        this.db.push(newUser);
        return 'User successfully added';
    }

    deleteUser(oldUser: UserViewModel) {
        const index = this.db.indexOf( oldUser );
        this.db.splice(index, index)
        return 'User successfully deleteded';
    }
}
