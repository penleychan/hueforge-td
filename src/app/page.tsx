import { promises as fs } from 'fs';

const Home = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/data/brands.json',
    'utf-8',
  );

  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export default Home;
