import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NextPage from "../hooks/next-page.jsx";
import downloadData from "../api/api.jsx";

const MainStyles = {
      mainContainer: {
            width: "360px",
            height: "90vh",
            backgroundColor: "#007bff",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #ccc",
            borderRadius: "20px",
      },
      child1Container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            height: "18%",
            textAlign: "center",
            flexDirection: "column",
            width: "360px",
            padding: "20px",
            borderRadius: "20px",
            boxSizing: "border-box",
      },
      child2Container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "82%",
            textAlign: "center",
            flexDirection: "column",
            width: "360px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxSizing: "border-box",
      },
      formContainer: {
            display: "flex",
            flexDirection: "column",
            maxWidth: "250px",
            padding: "40px 20px 20px 20px",
            border: "1px solid #ccc",
            borderRadius: "20px",
      },
      label: {
            display: "block",
            marginBottom: "8px",
      },
      input: {
            Width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
      },
      button: {
            Width: "100%",
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
      },
      warning: {
            color: "red",
      },
      title: {
            color: "white",
            cursor: "pointer",
            margin: "0",
      },
};

function MainPage() {
      const [number, setNumber] = useState("");
      const [msg, setMsg] = useState("");
      const navigate = useNavigate();

      const reloadPage = () => {
            location.reload();
      };

      const handleChange = (event) => {
            setNumber(event.target.value);
      };

      const handleSubmit = (event) => {
            event.preventDefault();
            nextStep(parseInt(number) || 0);
            setNumber("");
      };

      const nextStep = async (countNumber) => {
            if (countNumber > 0 && countNumber <= 100) {
                  setMsg("");
                  const data = await downloadData(countNumber);
                  NextPage(navigate, "/list", data);
            } else {
                  setMsg("Allowed values are only from 1 to 99.");
            }
      };

      return (
            <div style={MainStyles.mainContainer}>
                  <div style={MainStyles.child1Container}>
                        <h1 style={MainStyles.title} onClick={reloadPage}>
                              FakeBook
                        </h1>
                  </div>
                  <div style={MainStyles.child2Container}>
                        <h1>Welcome to FakeBook</h1>
                        <form
                              style={MainStyles.formContainer}
                              onSubmit={handleSubmit}
                        >
                              <label style={MainStyles.label}>
                                    Set the number of fake users
                              </label>
                              <input
                                    style={MainStyles.input}
                                    type="number"
                                    value={number}
                                    onChange={handleChange}
                              />
                              <button style={MainStyles.button}>Dive In</button>
                        </form>
                        <p style={MainStyles.warning}>{msg}</p>
                  </div>
            </div>
      );
}

export default MainPage;
