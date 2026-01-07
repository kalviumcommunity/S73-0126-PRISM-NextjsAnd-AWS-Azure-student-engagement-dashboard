export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const env = process.env.ENV_NAME;

  return (
    <main>
      <h1>Student Dashboard</h1>
      <p>Environment: {env}</p>
      <p>API Endpoint: {apiUrl}</p>
    </main>
  );
}
