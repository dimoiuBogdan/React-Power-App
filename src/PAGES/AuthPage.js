import AuthModal from "../COMPONENTS/AuthModal";

const AuthPage = ({ signUp }) => {
  return (
    <div
      id="auth-page"
      className="bg-cover bg-center w-full h-screen bg-red-200 flex items-center justify-center px-2 sm:px-0"
    >
      <AuthModal signUp={signUp} />
    </div>
  );
};

export default AuthPage;
