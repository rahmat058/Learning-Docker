import { notFound } from "next/navigation";

async function getData(): Promise<
  { id: number; title: string; userId: number; body: string }[]
> {
  const response = await fetch(`${process.env.API_URL}posts`, {
    cache: "no-store",
  });

  if (!response.ok) return notFound();

  return response.json();
}

export default async function Home() {
  const data: { id: number; title: string; userId: number; body: string }[] =
    await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Data Lists</h1>

      <ul>
        {data.map(
          (item: {
            id: number;
            title: string;
            userId: number;
            body: string;
          }) => (
            <li key={item.id} className="mb-5">
              <h2>{item.title}</h2>
              <p>User ID: {item.userId}</p>
              <p>ID: {item.id}</p>
              <p>Description: {item.body}</p>
            </li>
          )
        )}
      </ul>
    </main>
  );
}
