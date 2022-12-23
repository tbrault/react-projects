import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  const [result, setResult] = useState<number>(0);

  return (
    <Grid container spacing={1} sx={{ backgroundColor: "grey" }}>
      <Grid xs={12}>
        <Typography>{result}</Typography>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs>
          <Button size="small">AC</Button>
        </Grid>
        <Grid xs>
          <Button size="small">=/-</Button>
        </Grid>
        <Grid xs>
          <Button size="small">%</Button>
        </Grid>
        <Grid xs>
          <Button size="small">+</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
