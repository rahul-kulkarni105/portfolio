import React from 'react';
import {
  Button,
  Box,
  Text,
} from "grommet";

export const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? "accent-1" : undefined}
        pad={{ horizontal: "large", vertical: "medium" }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);