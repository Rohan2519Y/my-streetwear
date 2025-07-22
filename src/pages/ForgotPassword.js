import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Password</h1>
      <form className="form">
        <input placeholder="Email" /><br />
        <button>Send OTP</button>
      </form>
      <Link to="/reset-password">Enter OTP & Reset</Link>
    </div>
  );
}
