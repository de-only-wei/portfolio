import Form from './form';

export default async function Log() {
  return (
    <section className = 'prose'>
      <h1>Daily Logs</h1>
      <h3>Create a new entry :</h3>
      <br></br>
      <Form />
    </section>
  );
}
