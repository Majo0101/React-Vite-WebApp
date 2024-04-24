import { useLocation, useNavigate } from "react-router-dom";
import ListItem from "../components/ListItem.jsx";

const ListStyles = {
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
            height: "82%",
            alignItems: "start",
            flexDirection: "column",
            width: "360px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxSizing: "border-box",
      },
      listContainer: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            overflowY: "auto",
      },
      title: {
            color: "white",
            cursor: "pointer",
            margin: "0",
      },
};

function ListPage() {
      const navigate = useNavigate();
      const location = useLocation();
      const passedData = location.state?.data;

      const onBackPage = () => {
            navigate(-1);
      };

      return (
            <div style={ListStyles.mainContainer}>
                  <div style={ListStyles.child1Container}>
                        <h1 style={ListStyles.title} onClick={onBackPage}>
                              Back
                        </h1>
                  </div>
                  <div style={ListStyles.child2Container}>
                        <h2>People</h2>
                        <div style={ListStyles.listContainer}>
                              {passedData.map((item, index) => (
                                    <ListItem
                                          key={index}
                                          imageXl={item.picture.large}
                                          imageL={item.picture.medium}
                                          name={
                                                item.name.title +
                                                ". " +
                                                item.name.first +
                                                " " +
                                                item.name.last
                                          }
                                          address={
                                                item.location.city +
                                                ", " +
                                                item.location.country
                                          }
                                          gender={
                                                item.gender +
                                                ", " +
                                                item.dob.age
                                          }
                                          email={item.email}
                                          number={item.phone}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );
}

export default ListPage;
