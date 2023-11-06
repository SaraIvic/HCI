import Link from "next/link";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getUsers = async (): Promise<User[]> => {
  const data = await fetch(`${BASE_API_URL}/users`);
  return data.json();
};

export default async function Users() {
  const users = await getUsers();
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">Users</h1>
      <ul className="flex flex-col gap-8">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              <span className="text-2xl text-purple-500">{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
