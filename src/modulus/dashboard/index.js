import React from "react";
import Navigation from "../../common/component/navigation/index";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";

function Dashboard() {
  return (
    <>
      <Navigation />
      <Box m={"20px"} ml='200px' mr='200px'>
        <TextField
          id="outlined-multiline-static"
          label="Describe Your Task for AI-Powered Workflow"
          multiline
          fullWidth
          rows={20}
          variant="outlined"
        />
        <br/>
        <br/>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Dashboard;
