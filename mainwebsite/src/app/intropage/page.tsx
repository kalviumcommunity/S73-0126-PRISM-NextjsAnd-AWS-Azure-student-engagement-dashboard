import Link from "next/link";

export default function IntroPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to the Student Engagement Platform</h1>

      <p style={{ marginTop: "1rem" }}>
        This platform helps educational institutions track student engagement,
        monitor project progress, and encourage collaboration through dashboards
        and peer feedback.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <Link href="/dashboard">
          <button style={{ padding: "0.5rem 1rem" }}>
            Go to Dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}
