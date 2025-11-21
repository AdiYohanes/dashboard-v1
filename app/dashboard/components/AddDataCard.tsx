import { Paper, Stack, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddDataCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        borderRadius: 5,
        border: "2px dashed",
        borderColor: "divider",
        bgcolor: "background.paper",
        cursor: "pointer",
        transition: "0.25s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          borderColor: "primary.main",
          bgcolor: "action.hover",
        },
      }}
    >
      <Stack alignItems="center" spacing={1.2}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "primary.main",
            bgcolor: "rgba(0, 123, 255, 0.08)",
            transition: "0.2s",
          }}
        >
          <AddIcon fontSize="medium" />
        </Box>

        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          Add Data
        </Typography>
      </Stack>
    </Paper>
  );
}

export default AddDataCard;