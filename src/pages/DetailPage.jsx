import { useLocation, useNavigate } from "react-router-dom";

const DetailStyles = {
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
      child3Container: {
            height: "auto",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            overflow: "hidden",
      },
      photoContainer: {
            width: "100%",
            aspectRatio: "1",
            overflow: "hidden",
      },
      imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
      },
      textContainer: {
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "#f2f2f2",
      },
      btnContainer: {
            width: "100%",
            height: "auto",
            marginTop: "30px",
            display: "flex",
            flexDirection: "row",
            boxSizing: "border-box",
            justifyContent: "space-between",
      },
      btn: {
            width: "40%",
            border: "1px solid #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
      },
      title: {
            color: "white",
            cursor: "pointer",
            margin: "0",
      },
      texts: {
            margin: "0",
      },
};

function DetailPage() {
      const navigate = useNavigate();
      const location = useLocation();
      const passedData = location.state?.data;

      const onBackPage = () => {
            navigate(-1);
      };

      return (
            <div style={DetailStyles.mainContainer}>
                  <div style={DetailStyles.child1Container}>
                        <h1 style={DetailStyles.title} onClick={onBackPage}>
                              Back
                        </h1>
                  </div>
                  <div style={DetailStyles.child2Container}>
                        <div style={DetailStyles.child3Container}>
                              <div style={DetailStyles.photoContainer}>
                                    <img
                                          src={passedData.imageXl}
                                          alt="User"
                                          style={DetailStyles.imageStyle}
                                    />
                              </div>
                              <div style={DetailStyles.textContainer}>
                                    <h2 style={DetailStyles.texts}>
                                          {passedData.name}
                                    </h2>
                                    <p style={DetailStyles.texts}>
                                          {passedData.address}
                                    </p>
                                    <p>{passedData.gender}</p>
                                    <p style={DetailStyles.texts}>
                                          {passedData.email}
                                    </p>
                                    <p style={DetailStyles.texts}>
                                          {passedData.number}
                                    </p>
                                    <div style={DetailStyles.btnContainer}>
                                          <div style={DetailStyles.btn}>
                                                <p style={DetailStyles.texts}>
                                                      Message
                                                </p>
                                          </div>
                                          <div style={DetailStyles.btn}>
                                                <p style={DetailStyles.texts}>
                                                      Follow
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default DetailPage;
