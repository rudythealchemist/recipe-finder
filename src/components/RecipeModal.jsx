import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { fetchRecipeSummary } from "../utils/api";
import parse from "html-react-parser"; // Import the parser


// Define the RecipeModal component
const RecipeModal = ({ open, handleClose, recipe }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [isFetchingSummary, setIsFetchingSummary] = useState(false); // Add a state for loading

  useEffect(() => {
    // Fetch summary when the modal is opened
    const fetchSummary = async () => {
      setIsFetchingSummary(true); // Set loading state to true
      if (recipe) {
        const { title, summary } = await fetchRecipeSummary({ recipe });
        if (title && summary) {
          setTitle(title); // Set the title
          setSummary(summary); // Set the summary
        } else {
          console.error("Failed to fetch recipe summary");
        }
      } else {
        console.error("Recipe not found");
      }
      setIsFetchingSummary(false); // Set loading state to false after fetching
    };
// Fetch summary when the modal is opened
    if (open) {
      fetchSummary();
    }
  }, [open, recipe]); // Re-fetch summary when recipe changes

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle }}>
        {isFetchingSummary ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Display Title */}
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 2,
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>{" "}
            <Box sx={{ lineHeight: 2, fontSize: "1.2rem" }}>
              {parse(summary)}
              {/* Display Summary */}
            </Box>
          </>
        )}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
};

// Define the styles for the modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  maxHeight: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
  overflowY: "auto",
  overflowX: "auto",
  borderRadius: "10px",
};

// Export the RecipeModal component
export default RecipeModal;
