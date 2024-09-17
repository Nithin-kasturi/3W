const StatsBar = () => (
    <div className="flex justify-around bg-white p-4 shadow-lg rounded-lg my-4 mx-2">
      <div className="text-center">
        <h3 className="font-bold text-xl text-green-600">₹2875.00</h3>
        <p className="text-gray-500">Wallet</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-xl text-blue-600">₹2875.00</h3>
        <p className="text-gray-500">Earnings</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-xl text-yellow-600">2417</h3>
        <p className="text-gray-500">Referrals</p>
      </div>
    </div>
  );
  export default StatsBar;
  