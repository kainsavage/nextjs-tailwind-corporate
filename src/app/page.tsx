export default function Home() {
  return (
    <div className="flex flex-col flex-grow bg-[url('/shaking-hands.jpg')] bg-no-repeat bg-cover rounded-3xl">
      <div className="flex text-black text-center text-8xl font-bold mx-auto mt-12 mb-10">
        Trust us with
        <br />
        your business
      </div>
      <button className="flex mx-auto bg-gradient-to-t from-red-600 to-red-800 px-4 py-2 rounded-md text-slate-200 font-semibold mb-96">
        Customer Center
      </button>
    </div>
  );
}
