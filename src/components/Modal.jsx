import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RecipeModal = ({ open, handleClose, title, summary }) => {
  return (
    <Modal
      open={open} // Control modal open state
      onClose={handleClose} // Close modal when clicking outside
      aria-labelledby="recipe-summary-title"
      aria-describedby="recipe-summary-description"
    >
      <Box sx={style}>
        <Typography id="recipe-summary-title" variant="h6" component="h2">
          {title} - Summary
        </Typography>
        <Typography
          id="recipe-summary-description"
          sx={{ mt: 2 }}
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <Button variant="contained" onClick={handleClose} sx={{ mt: 2, backgroundColor: 'orange' }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default RecipeModal;
