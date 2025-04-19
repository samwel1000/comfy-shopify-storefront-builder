
import React from "react";
import { Button } from "./button";
import { Sun } from "lucide-react";

// This component is kept for future reference but not used in the current light-mode-only design
export const ThemeToggle: React.FC = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Light mode"
      disabled={true}
    >
      <Sun className="h-5 w-5" />
    </Button>
  );
};
