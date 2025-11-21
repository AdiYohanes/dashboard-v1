import { Paper, Typography, Box, Stack, Avatar } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function StatCard({
  title,
  value,
  icon,
  color,
  trend,
  caption,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  trend?: { isUp: boolean; percentage: string; label: string } | null;
  caption?: string;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        transition: "0.25s",
        boxShadow:
          "0px 4px 20px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255,255,255,0.2)",
        "&:hover": {
          boxShadow:
            "0px 8px 30px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255,255,255,0.3)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        spacing={2}
      >
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight={600}
            letterSpacing={0.3}
            gutterBottom
          >
            {title}
          </Typography>

          <Typography variant="h4" fontWeight={700} sx={{ lineHeight: 1.2 }}>
            {value}
          </Typography>

          {caption && (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
              {caption}
            </Typography>
          )}
        </Box>

        <Avatar
          variant="rounded"
          sx={{
            backdropFilter: "blur(12px)",
            bgcolor: `rgba(0, 123, 255, 0.08)`,
            color: `${color}.main`,
            width: 52,
            height: 52,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.3)",
          }}
        >
          {icon}
        </Avatar>
      </Stack>

      {trend && (
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              px: 1,
              py: 0.3,
              borderRadius: 2,
              fontWeight: 600,
              fontSize: "0.75rem",
              color: trend.isUp ? "success.main" : "error.main",
              bgcolor: trend.isUp
                ? "rgba(34,197,94,0.12)"
                : "rgba(239,68,68,0.12)",
            }}
          >
            {trend.isUp ? (
              <TrendingUpIcon fontSize="small" />
            ) : (
              <TrendingDownIcon fontSize="small" />
            )}
            <Typography variant="body2" fontWeight={700} sx={{ ml: 0.5 }}>
              {trend.percentage}
            </Typography>
          </Stack>

          <Typography variant="caption" color="text.secondary">
            {trend.label}
          </Typography>
        </Stack>
      )}
    </Paper>
  );
}

export default StatCard;
