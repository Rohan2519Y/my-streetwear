export default function ResetPassword() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Reset Password</h1>
      <form>
        <input placeholder="OTP" /><br />
        <input type="password" placeholder="New Password" /><br />
        <button>Reset Password</button>
      </form>
    </div>
  );
}
