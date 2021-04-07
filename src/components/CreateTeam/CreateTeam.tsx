import TeamsForm from "../TeamsForm/TeamsForm";
import "./CreateTeam.css";

const CreateTeam = () => {
  return (
    <main className="container">
      <header className="team-title">
        <h2 style={{ color: "royalblue" }}>Create your team</h2>
      </header>

      <TeamsForm />
    </main>
  );
};

export default CreateTeam;
