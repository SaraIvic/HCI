import { User } from "../page";

interface Params {
  userId: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getUser = async (id: string): Promise<User> => {
  const data = await fetch(`${BASE_API_URL}/users/${id}`);
  return data.json();
};

export default async function UserInfo({ params }: { params: Params }) {
  const user = await getUser(params.userId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">
        <span className="text-neutral-400">
          User {user.id}: {user.name}
        </span>
      </h1>
      <div>
        <p className="text-xl p-2">Username: {user.username}</p>
        <p className="text-xl p-2">Email: {user.email}</p>
        <p className="text-xl p-2">
          Address: {user.address.city}, {user.address.street}:{" "}
          {user.address.suite}
        </p>
        <p className="text-xl p-2">Phone: {user.phone}</p>
        <p className="text-xl p-2">Website: {user.website}</p>
        <p className="text-xl p-2">Company: {user.company.name}</p>
      </div>
    </main>
  );
}
