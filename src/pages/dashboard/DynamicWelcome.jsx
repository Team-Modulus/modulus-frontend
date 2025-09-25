import { useLocation } from "react-router-dom";
import WelcomePage from "../../component/common/WelcomePage";
import welcomePages from "../../constants/WelcomePages";
import { useState } from "react";

export default function DynamicWelcome() {
  const location = useLocation();
  const [showData, setShowData] = useState(false);
console.log(location.pathname);

  // Try exact match first, then fallback dynamically
  const pageData =
    welcomePages[location.pathname] ||
    Object.keys(welcomePages).find((path) =>
      location.pathname.startsWith(path)
    )
      ? welcomePages[
          Object.keys(welcomePages).find((path) =>
            location.pathname.startsWith(path)
          )
        ]
      : welcomePages["/calls"]; // fallback

  const DataComponent = pageData.component;

  return showData && DataComponent ? (
    <DataComponent />
  ) : (
    <WelcomePage {...pageData} onButtonClick={() => setShowData(true)} />
  );
}
