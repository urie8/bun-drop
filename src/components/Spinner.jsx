import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default Spinner;
