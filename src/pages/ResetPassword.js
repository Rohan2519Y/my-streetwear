export default function ResetPassword() {
  return (
    <div>
      <h1>Reset Password</h1>
      <form className="form">
        <input placeholder="OTP" /><br />
        <input type="password" placeholder="New Password" /><br />
        <button>Reset Password</button>
      </form>
    </div>
  );
}
