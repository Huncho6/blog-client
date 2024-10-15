import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaUserShield } from "react-icons/fa";

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (type) => {
    if (type === "user") {
      navigate("/user-login");
    } else {
      navigate("/admin-login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold text-green-600 mb-4 animate-bounce">
        Welcome!
      </h1>
      <h2 className="text-lg mb-12 font-semibold">Select your user type</h2>
      <div className="flex flex-col items-center lg:flex-row space-x-4">
        <div
          onClick={() => handleUserTypeSelection("user")}
          className="flex flex-col items-center border border-green-500 rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105 w-[200px] h-[250px] relative mb-10"
        >
          <FaUserAlt
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 border border-green-500 rounded-full p-2 text-white bg-green-500"
            size={60}
          />
          <h3 className="text-xl font-semibold text-green-600 mt-10">User</h3>
          <p className="text-md text-black mt-10 text-center">
            Access general user functionalities and services.
          </p>
        </div>

        <div
          onClick={() => handleUserTypeSelection("admin")}
          className="flex flex-col items-center border border-green-500 rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105 w-[200px] h-[250px] relative"
        >
          <FaUserShield
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 border border-green-500 rounded-full p-2 text-white bg-green-500"
            size={60}
          />
          <h3 className="text-xl font-semibold text-green-600 mt-10">Admin</h3>
          <p className="text-md text-black mt-10 text-center">
            Manage the platform and perform administrative tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
