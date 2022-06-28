import React, { useState } from "react";

export default function Toggle() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  const onChange = () => {
    if (useDarkTheme) {
      document.documentElement.dataset.theme = "garden";
      document.body.classList.remove("dark");
    } else {
      document.documentElement.dataset.theme = "forest";
      document.body.classList.add("dark");
    }
    setUseDarkTheme(!useDarkTheme);
  }

  return (
    <>
      <label className="text-neutral-content pr-2 text-xs md:text-base">Dark Theme</label>
      <input type="checkbox" className="toggle" checked={useDarkTheme} onChange={onChange} />
    </>
  );
}
