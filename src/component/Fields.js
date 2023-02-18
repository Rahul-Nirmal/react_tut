import React from "react";


const Fields = ({ name, email, inde }) => {
    
  return (
    <div className="dataValue">
      <h4>{name}</h4>
          <h4>{email}</h4>
          <Stack>
              
      <Button variant="contained" color="error">
        <DeleteIcon />
      </Button>
        </Stack>
    </div>
  );
};

export default Fields;
