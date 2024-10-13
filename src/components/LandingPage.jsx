import { useNavigate } from "react-router-dom";



const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to Our Site</h1>
      <div>
        <button onClick={() => navigate("/admin-login")} className="auth-button">
          Login as Admin
        </button>
        <button onClick={() => navigate("/user-login")} className="auth-button">
          Login as User
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
