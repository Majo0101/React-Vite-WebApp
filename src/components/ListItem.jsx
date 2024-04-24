import { useLocation, useNavigate } from "react-router-dom";
import NextPage from "../hooks/next-page.jsx";

const ListItemStyles = {
      mainContainer: {
            height: "auto",
            width: "100%",
            backgroundColor: "#f2f2f2",
            borderRadius: "20px",
            marginTop: "10px",
            boxSizing: "border-box",
            padding: "5px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
      },
      photoContainer: {
            width: "20%",
            aspectRatio: "1",
            borderRadius: "20px",
            backgroundColor: "red",
            boxSizing: "border-box",
            overflow: "hidden",
      },
      imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
      },
      textContainer: {
            width: "80%",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
      },
      nameStyle: {
            margin: "0",
            color: "black",
      },
      numberStyle: {
            margin: "2px",
            color: "black",
      },
};

function ListItem({ imageXl, imageL, name, address, gender, email, number }) {
      const navigate = useNavigate();
      const data = {
            imageXl,
            imageL,
            name,
            address,
            gender,
            email,
            number,
      };

      const onNextPage = () => {
            NextPage(navigate, "/detail", data);
      };

      return (
            <div style={ListItemStyles.mainContainer} onClick={onNextPage}>
                  <div style={ListItemStyles.photoContainer}>
                        <img
                              src={imageL}
                              alt="User"
                              style={ListItemStyles.imageStyle}
                        />
                  </div>
                  <div style={ListItemStyles.textContainer}>
                        <h3 style={ListItemStyles.nameStyle}>{name}</h3>
                        <p style={ListItemStyles.numberStyle}>{number}</p>
                  </div>
            </div>
      );
}

export default ListItem;
