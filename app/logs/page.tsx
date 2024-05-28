export default async function LogsPage() {
  let entries;
  try {
  } catch (err) {
    console.error(err);
  }
  return (
    <section className='prose'>
      <h1>Logs</h1>
      {/* {entries
        ? entries.map((entry: any) => (
            <div
              key={entry.id}
              className='flex flex-col mb-6 p-2 bg-blue-100 border-2 border-black dark:bg-gray-900 dark:border-white'
            >
              <div className='text-md text-gray-700 break-words dark:text-white'>
                {entry.content}
              </div>
              <div className='text-gray-500 mt-2 text-sm'>
                {new Date(entry.created_at).toLocaleString('en-GB', {
                  timeZone: 'America/Los_Angeles', // change this to your timezone
                  hour: 'numeric',
                  hour12: false,
                  minute: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  year: '2-digit',
                })}
              </div>
            </div>
          ))
        : 'None'} */}
    </section>
  );
}