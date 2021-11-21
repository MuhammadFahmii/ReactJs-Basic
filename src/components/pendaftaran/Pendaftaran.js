import { useState } from "react";
export default function Pendaftaran() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nohandphone, setNohandphone] = useState("");
  const [errorMassage, setErrorMassage] = useState("");
  const usernameRegex = /^[A-Za-z]*$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nohandphoneRegex =
    /^[+]?[(]?[0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,9}$/;

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
      if (!usernameRegex.test(e.target.value)) {
        setErrorMassage("Username harus berupa huruf");
      } else {
        setErrorMassage("");
      }
    } else if (e.target.name === "email") {
      setEmail(e.target.value.toLowerCase());
      if (!emailRegex.test(email)) {
        setErrorMassage("Format email tidak sesuai");
      } else {
        setErrorMassage("");
      }
    } else if (e.target.name === "nohandphone") {
      setNohandphone(e.target.value);
      if (!nohandphoneRegex.test(e.target.value)) {
        setErrorMassage("No Handphone harus terdiri dari 9-14 angka");
      } else {
        setErrorMassage("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      alert("Username tidak boleh kosong");
    } else if (errorMassage === "") {
      alert("Submit berhasil");
      setUsername("");
      setNohandphone("");
      setErrorMassage("");
    } else {
      alert("Username atau Password tidak sesuai");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
      <label>
        Username: <br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Email: <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        No Handphone: <br />
        <input
          type="text"
          name="nohandphone"
          value={nohandphone}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Latar Belakang Pendidikan:
        <br />
        <input
          id="it"
          type="radio"
          name="latar_belakang"
          value="IT"
          onChange={handleChange}
        />
        <label htmlFor="it">IT</label>
        <br />
        <input
          id="non-it"
          type="radio"
          name="latar_belakang"
          value="NON IT"
          onChange={handleChange}
        />
        <label htmlFor="non-it">NON IT</label>
      </label>
      <br />
      <br />
      <label>
        Kelas Koding:
        <br />
        <input
          type="checkbox"
          name="kelas_koding"
          value="Coding Backend with Golang"
          id="backend"
          onChange={handleChange}
        />
        <label htmlFor="backend">Coding Backend With Golang</label>
        <br />
        <input
          type="checkbox"
          name="kelas_koding"
          value="Coding Frontend with ReactJS"
          id="frontend"
          onChange={handleChange}
        />
        <label htmlFor="frontend">Coding Frontend With ReactJS</label>
        <br />
        <input
          type="checkbox"
          name="kelas_koding"
          value="Fullstack Developer"
          id="fullstack"
          onChange={handleChange}
        />
        <label htmlFor="fullstack">Fullstack Developer</label>
      </label>
      <br />
      <br />
      <label>
        Foto Surat Kesungguhan: <br />
        <input type="file" />
      </label>
      <br />
      <br />
      <label>
        Harapan untuk coding bootcamp ini <br />
        <input type="file" />
      </label>
      <br />
      <br />
      {errorMassage}
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" className="mx-3" />
    </form>
  );
}
