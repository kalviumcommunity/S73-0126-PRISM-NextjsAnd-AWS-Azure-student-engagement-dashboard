export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { cache: 'no-store' }
  ).then(res => res.json());

  return (
    <main>
      <h1>Student Dashboard</h1>
      <p>Recent Engagement Activity</p>

      <ul>
        {data.slice(0, 5).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}
