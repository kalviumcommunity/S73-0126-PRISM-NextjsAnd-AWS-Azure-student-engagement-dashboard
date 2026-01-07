export const revalidate = 60;

export default async function ProjectsPage() {
  const updates = await fetch(
    'https://jsonplaceholder.typicode.com/comments'
  ).then(res => res.json());

  return (
    <main>
      <h1>Project Updates</h1>

      <ul>
        {updates.slice(0, 5).map(update => (
          <li key={update.id}>{update.name}</li>
        ))}
      </ul>

      <p>Updates refresh every 60 seconds</p>
    </main>
  );
}
