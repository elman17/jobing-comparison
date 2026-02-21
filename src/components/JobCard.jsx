import { Box, Card, Typography, Chip, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessIcon from "@mui/icons-material/Business";

export default function JobCard({ job, isCompared, onCompare, onRemove }) {
  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        p: 2.5,
        borderRadius: "12px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        border: isCompared ? "2px solid #c25b02" : "2px solid transparent",
        backgroundColor: isCompared ? "#fff4f0" : "#fff",
        transition: "all 0.2s",
        "&:hover": {
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          transform: "translateY(-1px)",
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: "10px",
          backgroundColor: job.logoColor + "18",
          color: job.logoColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: "15px",
          flexShrink: 0,
        }}
      >
        {job.logo}
      </Box>

      {/* Məlumat */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* Üst hissə */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e" }}
            >
              {job.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#666",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <BusinessIcon sx={{ fontSize: 14 }} /> {job.company}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#1a1a2e",
              whiteSpace: "nowrap",
              ml: 1,
            }}
          >
            {job.salary}
          </Typography>
        </Box>

        {/* Meta */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 1.5 }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#888",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 13 }} /> {job.date}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#888",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <LocationOnIcon sx={{ fontSize: 13 }} /> {job.location}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#888" }}>
            ⏱ {job.type}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#888" }}>
            💼 {job.experience}
          </Typography>
        </Box>

        {/* Alt hissə: taglər + düymələr */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {/* Taglər */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
            <Chip
              label="jobsearch.az"
              size="small"
              sx={{
                fontSize: "11px",
                backgroundColor: "#f0f0f0",
                color: "#666",
              }}
            />
            {job.status === "premium" && (
              <Chip
                label="premium"
                size="small"
                sx={{
                  fontSize: "11px",
                  backgroundColor: "#fff3e0",
                  color: "#e65100",
                }}
              />
            )}
            <Chip
              label="aktivdir"
              size="small"
              sx={{
                fontSize: "11px",
                backgroundColor: "#e8f5e9",
                color: "#2e7d32",
              }}
            />
            {job.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  fontSize: "11px",
                  backgroundColor: "#e8eaf6",
                  color: "#3949ab",
                }}
              />
            ))}
          </Box>

          {/* Düymələr */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              onClick={() => (isCompared ? onRemove(job.id) : onCompare(job))}
              variant={isCompared ? "contained" : "outlined"}
              size="small"
              sx={{
                textTransform: "none",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "7px",
                borderColor: "#c25b02",
                color: isCompared ? "#fff" : "#c25b02",
                backgroundColor: isCompared ? "#c25b02" : "transparent",
                "&:hover": {
                  backgroundColor: "#c25b02",
                  borderColor: "#c25b02",
                  color: "#fff",
                },
              }}
            >
              {isCompared ? "✓ Müqayisədə" : "+ Müqayisə et"}
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: "none",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "7px",
                backgroundColor: "#c25b02",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#c25b02", boxShadow: "none" },
              }}
            >
              Keçid Et →
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
