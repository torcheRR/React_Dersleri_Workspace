import React from "react";
import Container from "@mui/material/Container";

function PageContainer({ children }) {
  return (
    <Container maxWidth="xl" style={{ paddingTop: "10px" }}>
      {children}
    </Container>
  );
}

export default PageContainer;
