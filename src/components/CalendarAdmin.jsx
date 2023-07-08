import React from "react";

export default function CalendarAdmin() {
  let a = JSON.parse(localStorage.getItem("profile-data"));

  return (
    <>
      <div
        className="jsx-1071416695 min-width-0"
        style={{ boxSizing: "border-box", minWidth: "0px" }}
      >
        <div
          className="can-divide with-divider medium"
          style={{ boxSizing: "border-box" }}
        >
          <div
            className="section-title-wrapper medium"
            style={{ boxSizing: "border-box" }}
          >
            <div
              className="section-title-row flex-center spread"
              style={{
                boxSizing: "border-box",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1.25rem",
              }}
            >
              <h2
                style={{
                  boxSizing: "border-box",
                  lineHeight: 1.2,
                  marginTop: "0px",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "0px",
                }}
              >
                Admins
              </h2>
              <div
                className="right-element"
                style={{ boxSizing: "border-box", margin: "-0.25rem 0px" }}
              >
                <div style={{ boxSizing: "border-box" }}>
                  <button
                    className="btn luma-button flex-center small light solid icon-left"
                    type="button"
                    style={{
                      boxSizing: "border-box",
                      lineHeight: 1.5,
                      margin: "0px",
                      fontFamily: "inherit",
                      appearance: "button",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "0.5rem",
                      whiteSpace: "nowrap",
                      outline: "transparent solid 2px",
                      padding: "0.4375rem 0.625rem",
                      fontWeight: 500,
                      position: "relative",
                      justifyContent: "center",
                      outlineOffset: "0.125rem",
                      maxWidth: "100%",
                      fontSize: "0.875rem",
                      height: "calc(1.75rem + 2 * 1px)",
                      width: "fit-content",
                      transition:
                        "all 0.3s cubic-bezier(0.4,0,0.2,1),outline 0s",
                      cursor: "pointer",
                      border: "1px solid",
                      borderColor: "transparent",
                      color: "hsla(0,0%,100%,.64)",
                      backgroundColor: "hsla(0,0%,100%,.08)",
                    }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        display: "block",
                        width: "0.875rem",
                        height: "0.875rem",
                        flexShrink: 0,
                        strokeWidth: 2.5,
                        marginRight: "0.375rem",
                      }}
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                    <div
                      className="label"
                      style={{
                        boxSizing: "border-box",
                        margin: "-4px 0px",
                        padding: "4px 0px",
                        overflow: "hidden",
                        lineHeight: 1,
                        textOverflow: "ellipsis",
                      }}
                    >
                      Add Admin
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="section-subtitle"
              style={{
                boxSizing: "border-box",
                marginTop: "-0.875rem",
                marginBottom: "1.25rem",
                color: "#d2d4d7",
                fontSize: "1rem",
              }}
            >
              Admins have full access to the calendar and can approve events.
            </div>
          </div>
          <div
            className="simple-table-wrapper bg-primary-elevated"
            style={{
              boxSizing: "border-box",
              backgroundColor: "#212325",
              border: "1px solid hsla(0,0%,100%,.08)",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <div
              className="jsx-485437346 base-row animated"
              style={{
                boxSizing: "border-box",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div
                className="jsx-1432042741 simple-user-row flex-center spread"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="jsx-637732214 avatar-wrapper small"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="jsx-637732214 avatar"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "1000px",
                      backgroundPosition: "center center",
                      width: "24px",
                      height: "24px",
                      marginRight: "20px",
                      backgroundSize: "cover",
                      backgroundColor: "#fff",
                      position: "relative",
                      backgroundImage:
                        'url("https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=24,height=24/avatars-default/avatar_4.png")',
                    }}
                  >
                    <div
                      className="jsx-2994073556 online-indicator-wrapper animated"
                      style={{
                        boxSizing: "border-box",
                        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                        borderRadius: "100%",
                        overflow: "hidden",
                        width: "25%",
                        height: "25%",
                        minWidth: "6px",
                        minHeight: "6px",
                        backgroundColor: "rgb(19,21,23)",
                        position: "absolute",
                        right: "0px",
                        bottom: "0px",
                        transform: "scale(0)",
                      }}
                    >
                      <div
                        className="jsx-2994073556 online-indicator"
                        style={{
                          boxSizing: "border-box",
                          margin: "max(1px,10%)",
                          borderRadius: "100%",
                          width: "calc(100% - 2 * max(1px,10%))",
                          height: "calc(100% - 2 * max(1px,10%))",
                          backgroundColor: "#ff9641",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="jsx-1432042741 info flex-1 min-width-0 text-ellipses text-tertiary"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 0%",
                    minWidth: "0px",
                    color: "#939597",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  <div
                    className="jsx-1432042741 name"
                    style={{ boxSizing: "border-box" }}
                  >
                    <div
                      className="jsx-1432042741 mr-2 fw-medium text-primary min-width-0 text-ellipses"
                      style={{
                        boxSizing: "border-box",
                        minWidth: "0px",
                        color: "#fff",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontWeight: 500,
                        marginRight: "0.5rem",
                      }}
                    >
                      {a.name}
                    </div>
                  </div>
                  <div
                    className="cursor-copy jsx-1432042741 email min-width-0 text-tertiary text-ellipses"
                    style={{
                      boxSizing: "border-box",
                      minWidth: "0px",
                      color: "#939597",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      cursor: "copy",
                    }}
                  >
                    {a.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
  scrollbar-gutter: stable;
  font-family: -apple-system,BlinkMacSystemFont,Inter,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  line-height: 1.5;
  background-color: rgb(19,21,23);
  color: #fff;
  color-scheme: dark;
}

body {
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
  scrollbar-gutter: stable;
}
`,
        }}
      />
    </>
  );
}
