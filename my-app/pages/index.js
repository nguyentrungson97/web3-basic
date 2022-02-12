export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center space-x-5 pt-10">
        <div className="bg-green-700 rounded-md px-3 py-2 text-white">
          Account
        </div>
        <div className="bg-blue-700 rounded-md px-3 py-2 text-white">
          Connect
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-5 pt-10">
        <div className="bg-green-700 rounded-md px-3 py-2 text-white">
          Courses
        </div>
        <div className="bg-blue-700 rounded-md px-3 py-2 text-white">
          Payment
        </div>
      </div>
    </>
  );
}
