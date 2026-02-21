import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import JobCard from "./components/JobCard";
import Toast from "./components/Toast";
import ComparisonDrawer from "./components/ComparisonDrawer";
import { JOBS } from "./data";

import { useToast } from "./hooks/useToast";
import Sidebar from "./components/SideBar";
import { useComparison } from "./hooks/ useComparison";

export default function App() {
  const { comparisons, handleCompare, handleRemove, handleClear } =
    useComparison();
  const { toast, showToast, closeToast } = useToast();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onCompare = (job) => {
    const result = handleCompare(job);
    if (result?.error) {
      showToast(result.error, "error");
    } else {
      showToast("Vakansiya müqayisəyə əlavə edildi!", "success");
      setDrawerOpen(true);
    }
  };

  const onClear = () => {
    handleClear();
    setDrawerOpen(false);
    showToast("Müqayisə siyahısı təmizləndi", "warning");
  };

  return (
    <div>
      <Navbar />
      <Layout>
        <Sidebar />
        <Box
          sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1.5 }}
        >
          {JOBS.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isCompared={comparisons.some((c) => c.id === job.id)}
              onCompare={onCompare}
              onRemove={handleRemove}
            />
          ))}
        </Box>
      </Layout>

      <ComparisonDrawer
        list={comparisons}
        onRemove={handleRemove}
        onClear={onClear}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <Toast toast={toast} onClose={closeToast} />
    </div>
  );
}
