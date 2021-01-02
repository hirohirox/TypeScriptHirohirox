module aaa {
  class Queue {
    private data = [];
    push = (item) => this.data.push(item);
    pop = () => this.data.shift();
  }

  const queue = new Queue();
  queue.push(0);
  queue.push("1");

  console.log(queue.pop().toPrecision(1));
  // console.log(queue.pop().toPrecision(1));
}

module bbb {
  class QueueNumber {
    private data = [];
    push = (item: number) => this.data.push(item);
    pop = (): number => this.data.shift();
  }

  const queue = new QueueNumber();
  queue.push(0);
  // queue.push("1"); // Error: Cannot push a string. only numbers allowd
}

module ccc {
  class Queue<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
  }

  const queue = new Queue<number>();
  queue.push(0);
  // queue.push("1"); // Error: cannot push a string. only number allows.
}

namespace ddd {
  const getJSON = <T>(config: {
    url: string,
    headers?: { [key: string]: string },
  }): Promise<T> => {
    const fetchConfig = ({
      method: 'GET',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(config.headers || {})
    });
    return fetch(config.url, fetchConfig).then<T>(response => response.json());
  }
  type LoadUsersResponse = {
    users: {
      name: string;
      email: string;
    }[];
  };
  function loadUsers() {
    return getJSON<LoadUsersResponse>({ url: 'http://example.com/users' });
  }
}