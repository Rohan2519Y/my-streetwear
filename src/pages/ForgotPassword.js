import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Forgot Password</h1>
      <form>
        <input placeholder="Email" /><br />
        <button>Send OTP</button>
      </form>
      <Link to="/reset-password">Enter OTP & Reset</Link>
    </div>
  );
}
