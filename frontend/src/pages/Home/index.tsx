import TatumLogo from "../../assets/tatum.jpeg";
import Form from "./form";
import "./style.css";

export function Home() {
  return (
    <div class="home">
      <a href="https://tatum.io/" target="_blank">
        <img src={TatumLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <h1>Tatum Hello</h1>
      <Form />
    </div>
  );
}
