import React from "react";
// import { IamAuthenticator } from 'ibm-cloud-sdk-core';
// import AssistantV2 from 'ibm-watson/assistant/v2';

import Navigation from "../../common/component/navigation/index";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";

function Dashboard() {
  const [message,setMessages] = React.useState("")
  const [response, setResponse] = React.useState('');
  const [budget, setBudget] = React.useState('');




  // const assistant = new AssistantV2({
  //   version: '2024-08-24',
  //   authenticator: new IamAuthenticator({
  //     apikey: process.env.REACT_APP_API_KEY,
  //   }),
  //   serviceUrl: process.env.REACT_APP_SERVICE_URL,
  // });

  const onSubmit = ()=>{
    console.log("this is message",message)
    //     const watsonResponse = await assistant.messageStateless({
    //       assistantId: process.env.REACT_APP_ASSISTANT_ID,
    //       input: {
    //         'message_type': 'text',
    //         'text': message,
    //       },
    //     });
    //     setResponse(watsonResponse.result.output.generic[0].text);
    //   } catch (err) {
    //     console.error('Error while communicating with Watson Assistant:', err);
    //   }
    // };
    }

  return (
    <>
      <Navigation />
      <Box m={"20px"} ml='200px' mr='200px'>
        <TextField
          id="outlined-multiline-static"
          label="Add your budget"
          multiline
          fullWidth
          rows={20}
          variant="outlined"
          onChange={(e)=>{
            setMessages(e.target.value)
          }}
        />
        <br/>
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="Add your budget"
          type="number"
          fullWidth
          variant="outlined"
          onChange={(e)=>{
            setBudget(e.target.value)
          }}
        />
        <br>
        </br>
        <br/>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Dashboard;
