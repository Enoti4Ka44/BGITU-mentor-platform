import { useState } from "react";
import Sidebar from "../../components/layout/sidebar/Sidebar";

function Home(props) {
  const [active, setActive] = useState(false);
  return <Sidebar />;
}

export default Home;
