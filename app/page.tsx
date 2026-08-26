export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Capstone Project
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Capstone Skeleton
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          This is the initial home page for the Frontend AI Engineering
          capstone project. Routes, navigation, placeholder screens, and core
          project structure will be added step by step.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h2 className="font-semibold">Routes</h2>
            <p className="mt-2 text-sm text-gray-600">
              Application screens will be organized with the Next.js App Router.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="font-semibold">Responsive</h2>
            <p className="mt-2 text-sm text-gray-600">
              The layout will support both mobile and desktop screen sizes.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="font-semibold">Deployment</h2>
            <p className="mt-2 text-sm text-gray-600">
              The project will be deployed with automatic previews on every push.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}