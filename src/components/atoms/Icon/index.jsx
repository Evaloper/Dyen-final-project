import React from "react";

export const Icon = (props) => {
  if (props.name === "search")
    return (
      <svg
        width={24}
        height={24}
        style={{
          pointerEvents: "none",
          display: "block",
          height: "17px",
          fill: "#777D81",
        }}
        {...props}
      >
        <path d="m20.87 20.17-5.59-5.59A6.956 6.956 0 0 0 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 0 0 11.58 5.29l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
    );

  if (props.name === "notification")
    return (
      <svg
        width={24}
        height={24}
        style={{
          pointerEvents: "none",
          display: "block",
          fill: "#fff",
        }}
        {...props}
      >
        <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z" />
      </svg>
    );

  if (props.name === "settings")
    return (
      <svg
        width={24}
        height={24}
        style={{
          pointerEvents: "none",
          display: "block",
          fill: "#fff",
        }}
        {...props}
      >
        <path d="M12 9.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z" />
      </svg>
    );

  if (props.name === "arrow-down")
    return (
      <svg
        className="style-scope tp-yt-iron-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "20px",
          height: "20px",
          fill: "#fff",
        }}
        viewBox="0 0 24 24"
        {...props}
      >
        <g className="style-scope tp-yt-iron-icon">
          <path
            d="M12 15.7 5.6 9.4l.7-.7 5.6 5.6 5.6-5.6.7.7-6.2 6.3z"
            className="style-scope tp-yt-iron-icon"
          />
        </g>
      </svg>
    );

  if (props.name === "arrow-left")
    return (
      <svg
        width={24}
        height={24}
        style={{
          pointerEvents: "none",
          display: "block",
          fill: "#fff",
        }}
        {...props}
      >
        <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z" />
      </svg>
    );

  return <div>Icon</div>;
};
