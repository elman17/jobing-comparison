import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function ComparisonDrawer({
  list,
  onRemove,
  onClear,
  open,
  onClose,
}) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      keepMounted 
      sx={{
        "& .MuiDrawer-paper": {
          borderRadius: "20px 20px 0 0",
          maxHeight: "70vh",
          px: 3,
          pb: 3,
        },
      }}
    >
      {/* Handle */}
      <Box sx={{ display: "flex", justifyContent: "center", pt: 1.5, pb: 1 }}>
        <Box
          sx={{
            width: 40,
            height: 4,
            backgroundColor: "#ddd",
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
            Müqayisə Paneli
          </Typography>
          <Box
            sx={{
              backgroundColor: "#c25b02",
              color: "#fff",
              borderRadius: "20px",
              px: 1.5,
              py: 0.2,
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            {list.length}/3
          </Box>
        </Box>
        <IconButton
          onClick={onClose}
          size="small"
          sx={{ backgroundColor: "#f5f5f5" }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Progress bar */}
      <Box
        sx={{ height: 3, backgroundColor: "#f0f0f0", borderRadius: 2, mb: 2 }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${(list.length / 3) * 100}%`,
            backgroundColor: "#c25b02",
            borderRadius: 2,
            transition: "width 0.4s ease",
          }}
        />
      </Box>

      {/* Body */}
      {list.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 5 }}>
          <Typography fontSize="48px">📋</Typography>
          <Typography sx={{ fontWeight: 600, color: "#333", mt: 1 }}>
            Hələ vakansiya seçilməyib
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#999", mt: 0.5 }}>
            Kartlardakı "Müqayisə et" düyməsini sıxın
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            overflowY: "auto",
          }}
        >
          {list.map((job) => (
            <Box
              key={job.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1.5,
                backgroundColor: "#fafafa",
                borderRadius: "10px",
                border: "1px solid #f0f0f0",
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "8px",
                  backgroundColor: job.logoColor + "18",
                  color: job.logoColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "13px",
                  flexShrink: 0,
                }}
              >
                {job.logo}
              </Box>

              {/* Info */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#1a1a2e" }}
                >
                  {job.title}
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#666" }}>
                  {job.company}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    fontSize: "12px",
                    color: "#888",
                    mt: 0.3,
                  }}
                >
                  <span>{job.salary}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </Box>
              </Box>

              {/* Sil */}
              <IconButton
                onClick={() => onRemove(job.id)}
                size="small"
                sx={{
                  backgroundColor: "#fee",
                  color: "#e53935",
                  "&:hover": { backgroundColor: "#ffcdd2" },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      {/* Footer */}
      {list.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<DeleteOutlineIcon />}
              onClick={onClear}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "10px",
                borderColor: "#ddd",
                color: "#666",
                "&:hover": {
                  borderColor: "#e53935",
                  color: "#e53935",
                  backgroundColor: "#fee",
                },
              }}
            >
              Hamısını təmizlə
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "10px",
                backgroundColor: "#c25b02",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#c25b02", boxShadow: "none" },
              }}
            >
              Müqayisə et ({list.length})
            </Button>
          </Box>
        </>
      )}
    </Drawer>
  );
}
