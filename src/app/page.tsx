import { use } from 'react';
import Tributton from './components/Tributton';

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

async function mock_rest() {
  await sleep();
  return 50;
}

export default function Home() {
  const foo = use(mock_rest());

  return (
    <>
      <div className="flex flex-col flex-grow bg-[url('/shaking-hands.jpg')] bg-no-repeat bg-cover rounded-3xl">
        <div className="flex text-black text-center text-8xl font-bold mx-auto mt-12 mb-10">
          Trust us with
          <br />
          your business {foo}
        </div>
        <button className="flex mx-auto bg-gradient-to-t from-red-600 to-red-800 px-4 py-2 rounded-md text-slate-200 font-semibold mb-96">
          Customer Center
        </button>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex text-black text-center text-4xl font-bold mx-auto mt-12">
          How Can We Help?
        </div>
        <Tributton className="mt-12" />
      </div>
    </>
  );
}
