import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container, Paper, Typography, Box } from "@mui/material";
import data from "./data.json"; // Import your data

const App = () => {
  return (
    <Container maxWidth="lg">
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
        }}
      >
        <Typography variant="h3" component="h2" gutterBottom color="primary">
          Performance Overview
        </Typography>
        <Box textAlign="left" mb={2}>
          <Typography variant="body2" color="text.secondary">
            An engaging vertical bar chart showcasing key performance metrics
            with modern styling.
          </Typography>
        </Box>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{ top: 30, right: 20, left: 20, bottom: 30 }}
          >
            <CartesianGrid stroke="#dcdcdc" strokeDasharray="5 5" />
            <XAxis dataKey="name" tick={{ fill: "#555" }} />
            <YAxis tick={{ fill: "#555" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f5f5f5",
                border: "1px solid #bbb",
                color: "#444",
              }}
            />
            <Legend wrapperStyle={{ color: "#444" }} />
            <Bar dataKey="pv" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Container>
  );
};

export default App;
