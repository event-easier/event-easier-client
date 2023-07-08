import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
export default function CalendarOptions() {
  const navigate = useNavigate();
  let a = JSON.parse(localStorage.getItem("profile-data"));
  console.log(a);
  const client = axios.create({
    // baseURL: `http://localhost:8081/api/v1/calendar/`,
    baseURL: "https://event-easier-staging.onrender.com/api/v1/calendar/",
    // baseURL: `https://event-easier-client-934bfbbxs-x-career.vercel.app/`,
  });
  const { id } = useParams();
  client.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${a.token}`;
    return config;
  });

  const handleSubmit = async () => {
    console.log("ee");
    try {
      await client
        .post(`/delete/${id}`)
        .then((response) => {
          navigate(`/home/calendars/`);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="jsx-1071416695 min-width-0"
        style={{ boxSizing: "border-box", minWidth: "0px" }}
      >
        <div style={{ boxSizing: "border-box" }}>
          {/* <div
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
                  Ticket Sales
                </h2>
                <div
                  className="right-element"
                  style={{ boxSizing: "border-box", margin: "-0.25rem 0px" }}
                />
              </div>
            </div>
            <div
              className="jsx-3881972913 jsx-969061070 content-card"
              style={{
                boxSizing: "border-box",
                borderRadius: "0.75rem",
                border: "1px solid hsla(0,0%,100%,.04)",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "hsla(0,0%,100%,.04)",
                padding: "1rem 1.125rem",
              }}
            >
              <div
                className="jsx-943585966 connect-icons mb-3"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  marginBottom: "1rem",
                }}
              >
                <div
                  className="jsx-943585966 inner"
                  style={{
                    boxSizing: "border-box",
                    gap: "1rem",
                    position: "relative",
                    display: "inline-flex",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="jsx-943585966 icon left"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "100px",
                      width: "2.5rem",
                      height: "2.5rem",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      background: "#fff",
                      color: "rgb(19,21,23)",
                      backgroundColor: "",
                    }}
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 133 134"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        display: "block",
                        width: "60%",
                        height: "60%",
                      }}
                    >
                      <path
                        d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67Z"
                        fill="currentColor"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                  <div
                    className="jsx-943585966 connector"
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  >
                    <div
                      className="jsx-943585966 connector-icon flex-center-center"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "100px",
                        borderWidth: "3px",
                        borderStyle: "solid",
                        backgroundColor: "#333537",
                        color: "#d2d4d7",
                        width: "calc(2.5rem * 0.5 + 4px)",
                        height: "calc(2.5rem * 0.5 + 4px)",
                        zIndex: 10,
                        borderColor: "rgb(19,21,23)",
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          display: "block",
                          width: "calc(2.5rem * 0.3125)",
                          height: "calc(2.5rem * 0.3125)",
                        }}
                      >
                        <path
                          d="M8.5 1.75a.75.75 0 0 0-1.5 0V7H1.75a.75.75 0 0 0 0 1.5H7v5.25a.75.75 0 0 0 1.5 0V8.5h5.25a.75.75 0 0 0 0-1.5H8.5V1.75Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          style={{ boxSizing: "border-box" }}
                        />
                      </svg>
                    </div>
                    <div
                      className="jsx-943585966 waves"
                      style={{
                        boxSizing: "border-box",
                        background:
                          "radial-gradient(circle,transparent calc(2.5rem * 0.3125),hsla(0,0%,100%,.08) calc(2.5rem * 0.3125),hsla(0,0%,100%,.08) calc(calc(2.5rem * 0.3125) + 1.5px),transparent calc(calc(2.5rem * 0.3125) + 1.5px),transparent calc(calc(2.5rem * 0.4375)),hsla(0,0%,100%,.04) calc(2.5rem * 0.4375),hsla(0,0%,100%,.04) calc(calc(2.5rem * 0.4375) + 1.5px),transparent calc(calc(2.5rem * 0.4375) + 1.5px))",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        clipPath:
                          "polygon(calc(2.5rem * 0.1875) 0,calc(100% - 2.5rem * 0.1875) 0,calc(2.5rem * 0.1875) 100%,calc(100% - 2.5rem * 0.1875) 100%,calc(2.5rem * 0.1875) 0)",
                      }}
                    />
                  </div>
                  <div
                    className="jsx-943585966 icon right"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "100px",
                      width: "2.5rem",
                      height: "2.5rem",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      background: "rgb(99, 91, 255)",
                      color: "white",
                      backgroundColor: "rgb(99, 91, 255)",
                    }}
                  >
                    <svg
                      viewBox="0 0 360 150"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        display: "block",
                        width: "60%",
                        height: "60%",
                      }}
                    >
                      <path
                        d="M360 77.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5V96c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9Zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8Zm-63.5-36.3c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8Zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4Zm-71.3-74.8 25.1-5.4V0l-25.1 5.3v20.4Zm0 7.6h25.1v87.5h-25.1V33.3Zm-26.9 7.4-1.6-7.4h-21.6v87.5h25V61.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4Zm-50-29.1-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V99c-3.2 1.3-19 5.9-19-8.9V54.6h19V33.3h-19l.1-21.7ZM25.3 58.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V36.2c-8.3-3.3-16.5-4.6-24.8-4.6C13.5 31.6 0 42.2 0 59.9 0 87.5 38 83.1 38 95c0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-29.8-38.2-24.5-38.2-35.7Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3
                className="mb-1"
                style={{
                  boxSizing: "border-box",
                  lineHeight: 1.2,
                  fontWeight: 600,
                  marginTop: "0px",
                  fontSize: "1.125rem",
                  marginBottom: "0.25rem",
                }}
              >
                Start Selling Tickets
              </h3>
              <div
                className="fs-sm text-secondary-alpha"
                style={{
                  boxSizing: "border-box",
                  color: "hsla(0,0%,100%,.79)",
                  fontSize: "0.875rem",
                }}
              >
                Start selling tickets to your events by creating a Stripe
                account. It usually takes 5 minutes to get set up.
              </div>
              <div
                className="mt-3"
                style={{ boxSizing: "border-box", marginTop: "1rem" }}
              >
                <button
                  className="btn luma-button flex-center medium primary solid icon-right"
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
                    padding: "0.625rem 0.875rem",
                    fontWeight: 500,
                    position: "relative",
                    justifyContent: "center",
                    outlineOffset: "0.125rem",
                    maxWidth: "100%",
                    fontSize: "1rem",
                    height: "calc(2.25rem + 2 * 1px)",
                    width: "fit-content",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1),outline 0s",
                    cursor: "pointer",
                    border: "1px solid",
                    borderColor: "#fff",
                    color: "rgb(19,21,23)",
                    backgroundColor: "#fff",
                  }}
                >
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
                    Get Started
                  </div>
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
                      width: "1rem",
                      height: "1rem",
                      flexShrink: 0,
                      strokeWidth: 2.5,
                      marginLeft: "0.5rem",
                    }}
                  >
                    <path
                      d="M7 17 17 7M7 7h10v10"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="text-secondary-alpha mt-3 fs-sm"
              style={{
                boxSizing: "border-box",
                color: "hsla(0,0%,100%,.79)",
                fontSize: "0.875rem",
                marginTop: "1rem",
              }}
            >
              Stripe is a secure payment processor with low fees that handles
              all of Luma’s sales.
            </div>
          </div> */}
          <div
            className="can-divide with-divider medium"
            style={{
              boxSizing: "border-box",
              borderTop: "1px solid hsla(0,0%,100%,.08)",
              marginTop: "2rem",
              paddingTop: "2rem",
            }}
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
                  Event Defaults
                </h2>
                <div
                  className="right-element"
                  style={{ boxSizing: "border-box", margin: "-0.25rem 0px" }}
                />
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
                Default settings for new events created on this calendar.
              </div>
            </div>
            <div
              className="jsx-3448449646 list-card"
              style={{
                boxSizing: "border-box",
                borderRadius: "0.75rem",
                border: "1px solid hsla(0,0%,100%,.08)",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "hsla(0,0%,100%,.04)",
              }}
            >
              <div
                className="base-list-row"
                style={{
                  boxSizing: "border-box",
                  transition: "background-color 0.3s cubic-bezier(0.4,0,0.2,1)",
                  backgroundClip: "padding-box",
                  padding: "0.75rem 1rem",
                }}
              >
                <div
                  className="flex-center spread gap-2"
                  style={{
                    boxSizing: "border-box",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ boxSizing: "border-box" }}>
                    <div
                      className="fw-medium"
                      style={{ boxSizing: "border-box", fontWeight: 500 }}
                    >
                      Publish on Create
                    </div>
                    <div
                      className="text-secondary-alpha fs-sm"
                      style={{
                        boxSizing: "border-box",
                        color: "hsla(0,0%,100%,.79)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Publish events to the calendar page automatically when
                      created.
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0"
                    style={{ boxSizing: "border-box", flexShrink: 0 }}
                  >
                    <label
                      className="lux-toggle medium primary"
                      style={{
                        boxSizing: "border-box",
                        flexShrink: 0,
                        position: "relative",
                        display: "inline-block",
                        marginBottom: "0px",
                        width: "2.375rem",
                        height: "1.5rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          opacity: 0,
                          width: "0px",
                          height: "0px",
                          colorScheme: "dark",
                        }}
                      />
                      <span
                        className="slider"
                        style={{
                          boxSizing: "border-box",
                          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                          inset: "0px",
                          borderRadius: "calc(1.5rem/2)",
                          position: "absolute",
                          cursor: "pointer",
                          backgroundColor: "#07a460",
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="base-list-row"
                style={{
                  boxSizing: "border-box",
                  transition: "background-color 0.3s cubic-bezier(0.4,0,0.2,1)",
                  backgroundClip: "padding-box",
                  borderTop: "1px solid hsla(0,0%,100%,.08)",
                  padding: "0.75rem 1rem",
                }}
              >
                <div
                  className="flex-center spread gap-2"
                  style={{
                    boxSizing: "border-box",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ boxSizing: "border-box" }}>
                    <div
                      className="fw-medium"
                      style={{ boxSizing: "border-box", fontWeight: 500 }}
                    >
                      Public Guest List
                    </div>
                    <div
                      className="text-secondary-alpha fs-sm"
                      style={{
                        boxSizing: "border-box",
                        color: "hsla(0,0%,100%,.79)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Show the guest list on the event page.
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0"
                    style={{ boxSizing: "border-box", flexShrink: 0 }}
                  >
                    <label
                      className="lux-toggle medium primary"
                      style={{
                        boxSizing: "border-box",
                        flexShrink: 0,
                        position: "relative",
                        display: "inline-block",
                        marginBottom: "0px",
                        width: "2.375rem",
                        height: "1.5rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          opacity: 0,
                          width: "0px",
                          height: "0px",
                          colorScheme: "dark",
                        }}
                      />
                      <span
                        className="slider"
                        style={{
                          boxSizing: "border-box",
                          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                          inset: "0px",
                          borderRadius: "calc(1.5rem/2)",
                          position: "absolute",
                          cursor: "pointer",
                          backgroundColor: "#07a460",
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="base-list-row"
                style={{
                  boxSizing: "border-box",
                  transition: "background-color 0.3s cubic-bezier(0.4,0,0.2,1)",
                  backgroundClip: "padding-box",
                  borderTop: "1px solid hsla(0,0%,100%,.08)",
                  padding: "0.75rem 1rem",
                }}
              >
                <div
                  className="flex-center spread gap-2"
                  style={{
                    boxSizing: "border-box",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ boxSizing: "border-box" }}>
                    <div
                      className="fw-medium"
                      style={{ boxSizing: "border-box", fontWeight: 500 }}
                    >
                      Collect Feedback
                    </div>
                    <div
                      className="text-secondary-alpha fs-sm"
                      style={{
                        boxSizing: "border-box",
                        color: "hsla(0,0%,100%,.79)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Email guests after the event to collect feedback.
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0"
                    style={{ boxSizing: "border-box", flexShrink: 0 }}
                  >
                    <label
                      className="lux-toggle medium primary"
                      style={{
                        boxSizing: "border-box",
                        flexShrink: 0,
                        position: "relative",
                        display: "inline-block",
                        marginBottom: "0px",
                        width: "2.375rem",
                        height: "1.5rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          opacity: 0,
                          width: "0px",
                          height: "0px",
                          colorScheme: "dark",
                        }}
                      />
                      <span
                        className="slider"
                        style={{
                          boxSizing: "border-box",
                          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                          inset: "0px",
                          borderRadius: "calc(1.5rem/2)",
                          position: "absolute",
                          cursor: "pointer",
                          backgroundColor: "#07a460",
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-3 text-secondary-alpha fs-sm"
              style={{
                boxSizing: "border-box",
                color: "hsla(0,0%,100%,.79)",
                fontSize: "0.875rem",
                marginTop: "1rem",
              }}
            >
              Changing these defaults does not affect existing events.
            </div>
          </div>
          {/* <div
            className="can-divide with-divider medium"
            style={{
              boxSizing: "border-box",
              borderTop: "1px solid hsla(0,0%,100%,.08)",
              marginTop: "2rem",
              paddingTop: "2rem",
            }}
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
                  API Keys
                </h2>
                <div
                  className="right-element"
                  style={{ boxSizing: "border-box", margin: "-0.25rem 0px" }}
                />
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
                Create API keys to send data to Zapier or use{" "}
                <a
                  href="https://docs.lu.ma/"
                  rel="nofollow noopener"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "#e6658a",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  Luma API
                </a>
                .
              </div>
            </div>
            <div
              className="jsx-2100117140 banner fs-sm rounded fw-medium flex-center spread gap-2 secondary"
              style={{
                boxSizing: "border-box",
                borderRadius: "0.5rem",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                gap: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "0.5rem 0.75rem 0.5rem 1rem",
                borderColor: "hsla(0,0%,100%,.08)",
                color: "#d2d4d7",
                backgroundColor: "hsla(0,0%,100%,.08)",
              }}
            >
              <div
                className="jsx-2100117140 flex-center content"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  className="jsx-2100117140 fw-medium"
                  style={{ boxSizing: "border-box", fontWeight: 500 }}
                >
                  Upgrade to Luma Plus to create API keys.
                </div>
              </div>
              <a
                className="btn luma-button flex-center small light solid no-icon"
                href="https://lu.ma/calendar/manage/cal-97SnmP4Nip3qCVv/settings/plus"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  cursor: "pointer",
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
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1),outline 0s",
                  border: "1px solid",
                  borderColor: "transparent",
                  color: "hsla(0,0%,100%,.64)",
                  backgroundColor: "hsla(0,0%,100%,.08)",
                }}
              >
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
                  Learn More
                </div>
              </a>
            </div>
            <button
              className="btn luma-button flex-center medium primary solid mt-3 icon-left"
              type="button"
              disabled
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
                padding: "0.625rem 0.875rem",
                fontWeight: 500,
                position: "relative",
                justifyContent: "center",
                outlineOffset: "0.125rem",
                maxWidth: "100%",
                fontSize: "1rem",
                height: "calc(2.25rem + 2 * 1px)",
                width: "fit-content",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1),outline 0s",
                opacity: 0.7,
                cursor: "not-allowed",
                border: "1px solid",
                borderColor: "#fff",
                color: "rgb(19,21,23)",
                backgroundColor: "#fff",
                marginTop: "1rem",
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
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  strokeWidth: 2.5,
                  marginRight: "0.5rem",
                }}
              >
                <path
                  d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"
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
                Create API Key
              </div>
            </button>
          </div> */}
          <div
            className="can-divide with-divider medium"
            style={{
              boxSizing: "border-box",
              borderTop: "1px solid hsla(0,0%,100%,.08)",
              marginTop: "2rem",
              paddingTop: "2rem",
            }}
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
                  Tracking
                </h2>
                <div
                  className="right-element"
                  style={{ boxSizing: "border-box", margin: "-0.25rem 0px" }}
                />
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
                Track event registrations and conversions with a Facebook pixel.
              </div>
            </div>
            <div
              className="jsx-2100117140 banner fs-sm rounded fw-medium flex-center spread gap-2 secondary"
              style={{
                boxSizing: "border-box",
                borderRadius: "0.5rem",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                gap: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "0.5rem 0.75rem 0.5rem 1rem",
                borderColor: "hsla(0,0%,100%,.08)",
                color: "#d2d4d7",
                backgroundColor: "hsla(0,0%,100%,.08)",
              }}
            >
              <div
                className="jsx-2100117140 flex-center content"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  className="jsx-2100117140 fw-medium"
                  style={{ boxSizing: "border-box", fontWeight: 500 }}
                >
                  Upgrade to Luma Plus to embed a Facebook Pixel.
                </div>
              </div>
              <a
                className="btn luma-button flex-center small light solid no-icon"
                href="https://lu.ma/calendar/manage/cal-97SnmP4Nip3qCVv/settings/plus"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  cursor: "pointer",
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
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1),outline 0s",
                  border: "1px solid",
                  borderColor: "transparent",
                  color: "hsla(0,0%,100%,.64)",
                  backgroundColor: "hsla(0,0%,100%,.08)",
                }}
              >
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
                  Learn More
                </div>
              </a>
            </div>
          </div>
          {/* <div
            className="can-divide with-divider medium"
            style={{
              boxSizing: "border-box",
              borderTop: "1px solid hsla(0,0%,100%,.08)",
              marginTop: "2rem",
              paddingTop: "2rem",
            }}
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
                  Archive Calendar
                </h2>
                <div
                  className="right-element"
                  style={{ boxSizing: "border-box", margin: "-0.25rem 0px" }}
                />
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
                Archive this calendar to stop accepting subscriptions or event
                submissions. We will indicate on the calendar page that it has
                been archived.
              </div>
            </div>
            <button
              className="btn luma-button flex-center medium primary solid icon-left"
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
                padding: "0.625rem 0.875rem",
                fontWeight: 500,
                position: "relative",
                justifyContent: "center",
                outlineOffset: "0.125rem",
                maxWidth: "100%",
                fontSize: "1rem",
                height: "calc(2.25rem + 2 * 1px)",
                width: "fit-content",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1),outline 0s",
                cursor: "pointer",
                border: "1px solid",
                borderColor: "#fff",
                color: "rgb(19,21,23)",
                backgroundColor: "#fff",
              }}
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  display: "block",
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  strokeWidth: 2.5,
                  marginRight: "0.5rem",
                }}
              >
                <path
                  d="M2.25 2.5h11.5c.198 0 .359 0 .498.002.002.14.002.3.002.498v.5c0 .198 0 .359-.002.498-.14.002-.3.002-.498.002H2.25c-.198 0-.359 0-.498-.002-.002-.14-.002-.3-.002-.498V3c0-.198 0-.359.002-.498.14-.002.3-.002.498-.002Zm-1 2.975C.925 5.443.706 5.37.543 5.207.25 4.914.25 4.443.25 3.5V3c0-.943 0-1.414.293-1.707C.836 1 1.307 1 2.25 1h11.5c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v.5c0 .943 0 1.414-.293 1.707-.163.163-.382.236-.707.268v5.056c0 .674 0 1.224-.037 1.672-.037.463-.118.882-.317 1.273a3.25 3.25 0 0 1-1.42 1.42c-.391.199-.81.28-1.273.317-.447.037-.998.037-1.671.037H5.968c-.674 0-1.225 0-1.672-.037-.463-.037-.882-.118-1.272-.317a3.25 3.25 0 0 1-1.42-1.42c-.2-.391-.28-.81-.318-1.273-.037-.447-.037-.998-.037-1.672V5.475Zm1.5.025v5c0 .712 0 1.202.032 1.58.03.371.085.57.159.714.168.33.435.598.765.765.144.074.343.13.713.16.38.03.869.031 1.581.031h4c.712 0 1.202 0 1.58-.032.371-.03.57-.085.714-.159a1.75 1.75 0 0 0 .765-.764c.074-.145.13-.344.16-.714.03-.38.031-.869.031-1.581v-5H2.75Zm3 2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 5.75 8Z"
                  fill="currentColor"
                  fillRule="evenodd"
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
                Archive Calendar
              </div>
            </button>
          </div> */}
          <div
            className="can-divide with-divider medium"
            style={{
              boxSizing: "border-box",
              borderTop: "1px solid hsla(0,0%,100%,.08)",
              marginTop: "2rem",
              paddingTop: "2rem",
            }}
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
                  Delete Calendar
                </h2>
                <div
                  className="right-element"
                  style={{ boxSizing: "border-box", margin: "-0.25rem 0px" }}
                />
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
                Permanently delete this calendar. This operation cannot be
                undone. Subscribers won't be notified.
              </div>
            </div>
            <button
              className="btn luma-button flex-center medium error solid icon-left"
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
                padding: "0.625rem 0.875rem",
                fontWeight: 500,
                position: "relative",
                justifyContent: "center",
                outlineOffset: "0.125rem",
                maxWidth: "100%",
                fontSize: "1rem",
                height: "calc(2.25rem + 2 * 1px)",
                width: "fit-content",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1),outline 0s",
                cursor: "pointer",
                border: "1px solid",
                borderColor: "#e83b47",
                color: "#fff",
                backgroundColor: "#e83b47",
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
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  strokeWidth: 2.5,
                  marginRight: "0.5rem",
                }}
              >
                <path
                  d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"
                  style={{ boxSizing: "border-box" }}
                />
              </svg>
              <div
                onClick={() => handleSubmit()}
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
                Delete Calendar
              </div>
            </button>
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
