import React, { createContext } from "react";

const data = {
  missions: [
    {
      id: 1,
      name: "Space Mission 1",
      date: "00/00/00",
      description:
        "Lorem thing dhsir giushal kabdka m dvyienlanm hdrpnbhdjhftianbf nci"
    },
    {
      id: 2,
      name: "Space Mission 2",
      date: "00/00/00",
      description:
        "Lorem thing dhsir giushal kabdka m dvyienlanm hdrpnbhdjhftianbf nci"
    },
    {
      id: 3,
      name: "Space Mission 3",
      date: "00/00/00",
      description:
        "Lorem thing dhsir giushal kabdka m dvyienlanm hdrpnbhdjhftianbf nci"
    },
    {
      id: 4,
      name: "Space Mission 4",
      date: "00/00/00",
      description:
        "Lorem thing dhsir giushal kabdka m dvyienlanm hdrpnbhdjhftianbf nci"
    }
  ]
};

export const AppContext = createContext(data);

export default ({ children }) => (
  <AppContext.Provider value={data}>{children}</AppContext.Provider>
);
