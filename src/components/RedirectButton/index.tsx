import { useNavigate } from "react-router-dom";

const RedirectButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="w-80 bg-black py-3 text-white rounded-lg"
      onClick={() => navigate("/login")}
    >
      Login
    </button>
  );
};

export { RedirectButton };
