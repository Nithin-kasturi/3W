const Header = () => (
    <div className="bg-blue-500 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-lg">Home</h1>
          <div className="flex space-x-2">
            <span className="bg-red-500 p-1 rounded-full text-white">3982</span>
            <span className="bg-green-500 p-1 rounded-full text-white">₹2875.00</span>
            <span className="bg-yellow-500 p-1 rounded-full text-white">₹1000</span>
          </div>
        </div>
        <div className="bg-yellow-400 text-center px-4 py-2 rounded-lg font-bold">
          Taskplanet. Get 10 Points on every referral
        </div>
      </div>
    </div>
  );
  export default Header;
  