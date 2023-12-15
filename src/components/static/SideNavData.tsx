import { TbDashboard } from "react-icons/tb";
import { CiPalette, CiText } from "react-icons/ci";

import { useState } from "react";

const onStateChange = () => {
  const [state, setState] = useState<boolean>(false);

  if (!document.startViewTransition) {
    setState(!state);
  } else {
    document.startViewTransition(() => {
      setState(!state);
    });
  }

  console.log(state);
};

export const navData = [
  {
    text: "Dashboard",
    content: "Dashboard",
    icon: <TbDashboard />,
  },
  {
    text: "Typography",
    icon: <CiText />,
  },
  {
    text: "Color",
    icon: <CiPalette />,
  },
  {
    text: "Utility",
    icon: <CiPalette />,
    onClick: () => {
      onStateChange();
    },
  },
];
