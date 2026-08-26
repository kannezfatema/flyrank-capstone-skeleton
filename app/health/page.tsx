export default async function HealthPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch health-check data");
  }

  const data = await response.json();

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Health Check
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Application Health
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          This page confirms that the application can fetch and render external
          data.
        </p>

        <div className="mt-10 rounded-xl border p-6">
          <h2 className="font-semibold">Fetched Data</h2>

          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="font-medium">ID</dt>
              <dd>{data.id}</dd>
            </div>

            <div>
              <dt className="font-medium">Title</dt>
              <dd>{data.title}</dd>
            </div>

            <div>
              <dt className="font-medium">Completed</dt>
              <dd>{data.completed ? "Yes" : "No"}</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}