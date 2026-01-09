import Link from "next/link";

export default function IntroPage() {

  const x=10;
  console.log(x)
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        Welcome to the Student Engagement Platform
      </h1>

      <p className="mt-4 max-w-2xl text-gray-600 text-base md:text-lg">
        This platform helps educational institutions track student engagement,
        monitor project progress, and encourage collaboration through dashboards
        and peer feedback.
      </p>

      <div className="mt-8">
        <Link href="/dashboard">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}
