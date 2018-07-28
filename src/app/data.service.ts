import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

//needed fix; Amgular suggests this:
//https://github.com/angular/angular/issues/22120

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { "id":1, "userName": "brendan", "email": "fake@email.com"  }
      , { "id":2, "userName": "brad", "email": "email@notreal.com"  }
      , { "id":3, "userName": "caleb", "email": "dummy@email.com"  }
    ];
    return { users };
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
}
