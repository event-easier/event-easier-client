import React from "react";

export default function EventHosts({ event }) {
  return (
    <>
      <div
        className="jsx-85398371 sidebar flex-column gap-3"

      >
        <div
          className="jsx-3622075031 content-card"

        >
          <div
            className="jsx-3622075031 card-title flex-center gap-2 spread"

          >
            <div
              className="jsx-3622075031 flex-center gap-2"

            >
              <div
                className="jsx-3622075031 title-icon flex-center-center"

              >
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    width: "1rem",
                    height: "1rem",
                    display: "block",
                  }}
                >
                  <path
                    d="M9.75 1a.75.75 0 0 0 0 1.5c1.112 0 1.942.826 1.942 1.99 0 .56-.193.895-.43 1.217l-.107.14c-.103.134-.23.3-.32.443a1.736 1.736 0 0 0-.296.938c0 .77.365 1.297.846 1.65.38.28.86.467 1.236.614l.122.048c.445.176.757.318.969.506.168.149.288.338.288.704a.75.75 0 0 0 1.5 0c0-.808-.313-1.402-.794-1.827-.436-.387-.99-.611-1.41-.778l-.091-.036c-.427-.168-.72-.284-.932-.44-.168-.123-.234-.232-.234-.44 0-.003 0-.01.006-.027a.59.59 0 0 1 .058-.111c.054-.086.107-.155.18-.25.05-.064.11-.141.186-.244.34-.46.723-1.104.723-2.108C13.192 2.522 11.715 1 9.75 1Zm-3.429.75c-2.128 0-3.75 1.622-3.75 3.75 0 1.083.42 1.775.793 2.271.082.11.147.192.203.263.084.107.146.186.208.282.082.127.082.171.082.184 0 .25-.086.388-.292.537-.246.178-.582.308-1.052.49l-.106.042c-.47.183-1.073.424-1.547.836-.518.452-.86 1.084-.86 1.952 0 .68.31 1.224.765 1.623.435.38 1.004.634 1.59.81 1.177.353 2.656.46 3.966.46s2.79-.107 3.966-.46c.587-.176 1.156-.43 1.59-.81.456-.399.766-.942.766-1.623 0-.868-.342-1.5-.86-1.952-.474-.412-1.077-.653-1.547-.836l-.106-.041c-.47-.183-.806-.313-1.052-.49-.206-.15-.292-.288-.292-.538 0-.013 0-.057.081-.184a3.52 3.52 0 0 1 .209-.282c.056-.07.121-.154.203-.263.372-.496.792-1.188.792-2.271 0-2.128-1.621-3.75-3.75-3.75ZM4.071 5.5c0-1.3.95-2.25 2.25-2.25s2.25.95 2.25 2.25c0 .632-.222 1.011-.492 1.371-.034.046-.077.1-.123.16a6.898 6.898 0 0 0-.35.474c-.16.249-.32.58-.32.995 0 .821.396 1.38.913 1.753.413.298.937.5 1.357.661l.136.053c.495.192.857.353 1.106.57.204.178.345.403.345.82 0 .177-.065.33-.253.494-.208.182-.55.357-1.034.502-.967.29-2.273.397-3.535.397-1.26 0-2.567-.107-3.534-.397-.485-.145-.826-.32-1.034-.502-.188-.165-.253-.317-.253-.494 0-.417.14-.642.345-.82.25-.217.611-.378 1.105-.57l.137-.053c.42-.161.944-.363 1.357-.66.517-.375.913-.933.913-1.754 0-.416-.16-.746-.32-.995a6.895 6.895 0 0 0-.35-.474 10.78 10.78 0 0 1-.123-.16c-.27-.36-.493-.74-.493-1.371Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>
              </div>
              <div
                className="jsx-3622075031 title-label"

              >
                Hosts
              </div>
            </div>
          </div>
          <div
            className="jsx-3622075031 content"

          >
            <div
              className="jsx-784146798"

            >
              <div
                className="jsx-784146798 flex-column hosts"

              >
                <div
                  className="jsx-784146798 flex-center gap-2"

                >
                  <a
                    className="flex-center host-row gap-2 flex-1"
                    href={`/user/${event?.hosts[0]._id}`}

                  >
                    <div
                      className="jsx-172621494 avatar-wrapper small"

                    >
                      <div
                        className="jsx-172621494 avatar"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "1000px",
                          backgroundPosition: "center center",
                          width: "1.5rem",
                          height: "1.5rem",
                          backgroundSize: "cover",
                          backgroundColor: "#fff",
                          position: "relative",
                          backgroundImage:
                            `url(${event?.hosts[0].avatar})`,
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
                            backgroundColor: "#fff",
                            position: "absolute",
                            right: "0px",
                            bottom: "0px",
                            transform: "scale(0)",
                          }}
                        >
                          <div
                            className="jsx-2994073556 online-indicator"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="jsx-784146798 min-width-0"
                    >
                      <div
                        className="jsx-784146798 fw-medium text-ellipses"
                        title={event?.hosts[0].name}
                      >
                        {event?.hosts[0].name}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="jsx-784146798 flex-center gap-2 mt-3 mb-1"

              >
                <button
                  className="btn luma-button flex-center medium light solid full-width no-icon"
                  type="button"

                >
                  <div
                    className="label"

                  >
                    Contact
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
