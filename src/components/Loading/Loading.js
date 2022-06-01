import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "3px",
      }}
    >
      <LinearProgress />
    </Box>
  );
};

export default Loading;
