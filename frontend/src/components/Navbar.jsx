export default function Navbar() {
  return (
    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"20px 40px",
      borderBottom:"1px solid #ddd"
    }}>
      <h2>ExamRoom</h2>

      <div>
        <button>Login</button>
        <button style={{marginLeft:"10px"}}>Register</button>
      </div>
    </nav>
  );
}