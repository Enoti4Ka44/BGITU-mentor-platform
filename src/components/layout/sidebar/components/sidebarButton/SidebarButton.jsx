import { useState } from "react";
import { useNavigate } from "react-router";

function SidebarButton({ children, route }) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!route) return;
    navigate(`/${route}`);
  };
  return <button onClick={handleNavigate}>{children}</button>;
}

export default SidebarButton;
