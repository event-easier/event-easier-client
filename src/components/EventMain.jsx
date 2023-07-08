import React from "react";
import EventHosts from "./EventHost";
import EventManage from "./EventManage";
import EventRegistration from "./EventRegistration";
import EventDescription from "./EventDescription";

export default function EventMain({ event }) {
    const isHost = event.hosts.some((user) => {
        return user.user_id == JSON.parse(localStorage.getItem("profile-data"))._id
    });
    // console.log(event)
    // console.log(localStorage.getItem("profile-data")._id)
    const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const weekday = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
    const getMonthFromData = (e) => {
        const d = new Date(event?.start_time);

        return month[d.getMonth()];
    };
    const getDateFromData = (e) => {
        const d = new Date(event?.start_time);
        return d.getDate();
    };
    const getDayFromData = (e) => {
        const d = new Date(event?.start_time);
        return weekday[d.getDay()];
    };
    const getHourFromData = (e) => {
        const d = new Date(e);
        return String(d.getUTCHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
        // return d.getHours();
    };
    return (
        <>
            <div
                className="jsx-2566509379 page-content"
            >
                <div
                    className="jsx-754593503 tint-root"
                >
                    <meta
                        name="theme-color"
                        content="#f4f5f6"
                    />
                    <div
                        className="jsx-2720613182 event-theme legacy"
                    >
                        <div
                            className="jsx-2720613182 background full-page"
                        />
                        <div
                            className="jsx-2720613182 page-container"
                        >
                            <div
                                className="jsx-85398371 flex-column"
                            >
                                <div
                                    className="jsx-85398371 zm-container relative main"
                                >
                                    <div
                                        className="jsx-914326852 top-card"
                                    >
                                        <div
                                            className="jsx-4068354093 img-aspect-ratio cover-image"
                                            style={{
                                                boxSizing: "border-box",
                                                overflow: "hidden",
                                                width: "100%",
                                                position: "relative",
                                                borderRadius: "0.5rem",
                                                backgroundColor: "rgba(19,21,23,0.04)",
                                                paddingBottom: "50%",
                                            }}
                                        >
                                            <img
                                                className="jsx-4068354093"
                                                alt="Cover Image for Cooking"
                                                sizes="(max-width: 450px) 420px, (max-width: 650px) 620px, 960px"
                                                src={event?.cover}
                                                srcSet={`${event?.cover} 420w, ${event?.cover} 840w, ${event?.cover} 620w, ${event?.cover} 1240w, ${event?.cover} 960w, ${event?.cover} 1920w`}

                                            />
                                        </div>
                                        <div
                                            className="jsx-2825744342 top-card-content"
                                        >
                                            <div
                                                className="jsx-2825744342 mb-3 flex-start spread gap-2"
                                            >
                                                <div
                                                    className="jsx-2825744342 min-width-0"
                                                >
                                                    <h1
                                                        className="jsx-2825744342 title text-primary mb-0"
                                                    >
                                                        {event?.name}
                                                    </h1>
                                                    <div
                                                        className="hosts"
                                                    >
                                                        <div
                                                            className="flex-center gap-2 text-tinted"
                                                        >
                                                            <div
                                                                className="jsx-2626524769 heads flex-center"
                                                            >
                                                                <div
                                                                    className="jsx-2626524769 head flex-start"
                                                                >
                                                                    <div
                                                                        className="jsx-4070717398 avatar-wrapper small"
                                                                    >
                                                                        <div
                                                                            className="jsx-4070717398 avatar"
                                                                            style={{
                                                                                boxSizing: "border-box",
                                                                                borderRadius: "1000px",
                                                                                backgroundPosition: "center center",
                                                                                width: "1.125rem",
                                                                                height: "1.125rem",
                                                                                backgroundSize: "cover",
                                                                                backgroundColor: "#fff",
                                                                                position: "relative",
                                                                                backgroundImage:
                                                                                    `url(${event?.hosts[0].avatar})`,
                                                                            }}
                                                                        >
                                                                            <div
                                                                                className="jsx-2994073556 online-indicator-wrapper animated"
                                                                            >
                                                                                <div
                                                                                    className="jsx-2994073556 online-indicator"

                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="lux-menu-trigger-wrapper jsx-2626524769 tooltip"

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="jsx-1290421626 text-ellipses"
                                                                style={{
                                                                    padding: "20px"
                                                                }}
                                                            >
                                                                Hosted by {event?.hosts[0].name}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    className="jsx-3384225975 calendar-card text-center full-height flex-shrink-0"

                                                >
                                                    <div
                                                        className="jsx-3384225975 month"

                                                    >
                                                        Thg {getMonthFromData()}
                                                    </div>
                                                    <div
                                                        className="jsx-3384225975 day"

                                                    >
                                                        {getDateFromData()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="jsx-2825744342 flex-start meta"

                                            >
                                                <div
                                                    className="jsx-2825744342 flex-1 min-width-0"

                                                >
                                                    <div
                                                        className="jsx-1546168629 row-container"

                                                    >
                                                        <div
                                                            className="jsx-3672980428 icon-row flex-center gap-3"

                                                        >
                                                            <div
                                                                className="jsx-3672980428 icon-container flex-center-center rounded overflow-hidden flex-shrink-0"

                                                            >
                                                                <div
                                                                    className="jsx-2577721668 calendar-card text-center full-height"

                                                                >
                                                                    <div
                                                                        className="jsx-2577721668 month"

                                                                    >
                                                                        Thg {getMonthFromData()}
                                                                    </div>
                                                                    <div
                                                                        className="jsx-2577721668 day"

                                                                    >
                                                                        {getDateFromData()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="jsx-3672980428 flex-1 min-width-0"

                                                            >
                                                                <div
                                                                    className="jsx-3672980428 title text-ellipses"

                                                                >
                                                                    {getDayFromData()}, {getDateFromData()} Thg {getMonthFromData()}
                                                                </div>
                                                                <div
                                                                    className="jsx-3672980428 desc text-ellipses"

                                                                >
                                                                    {getHourFromData(event?.start_time)} to {getHourFromData(event?.end_time)} GMT+7
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="lux-collapse"

                                                        >
                                                            <div
                                                                className="jsx-1546168629 sessions pt-2"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="jsx-2825744342 flex-1 min-width-0"

                                                >
                                                    {
                                                        (event.type.event_type == "ZOOM")
                                                            ?
                                                            <div
                                                                className="jsx-3672980428 icon-row flex-center gap-3"

                                                            >
                                                                <div
                                                                    className="jsx-3672980428 icon-container flex-center-center rounded overflow-hidden flex-shrink-0"

                                                                >
                                                                    {/* <svg
                                                                        viewBox="0 0 16 16"
                                                                        xmlns="http://www.w3.org/2000/svg"

                                                                    >
                                                                        <g
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="1.5"

                                                                        >
                                                                            <path
                                                                                d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854Z"

                                                                            />
                                                                            <path
                                                                                d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"

                                                                            />
                                                                        </g>
                                                                    </svg> */}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="currentColor" d="M48 13.208v22.704c0 1.504-.828 1.332-1.533.783L36.5 29.25v-9.38l9.967-7.446c.87-.725 1.533-.556 1.533.784ZM27.553 12c3.768-.017 6.837 3.071 6.856 6.9v16.936a1.252 1.252 0 0 1-1.246 1.255H8.856c-3.768.017-6.837-3.071-6.856-6.9V13.255A1.252 1.252 0 0 1 3.246 12Z"></path></svg>
                                                                </div>
                                                                <div
                                                                    className="jsx-3672980428 flex-1 min-width-0"
                                                                >
                                                                    <div
                                                                        className="jsx-3672980428 title text-ellipses"
                                                                    >
                                                                        <a href={`${event.type?.zoom_url}`}>
                                                                            Zoom
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div
                                                                className="jsx-3672980428 icon-row flex-center gap-3"

                                                            >
                                                                <div
                                                                    className="jsx-3672980428 icon-container flex-center-center rounded overflow-hidden flex-shrink-0"

                                                                >
                                                                    <svg
                                                                        viewBox="0 0 16 16"
                                                                        xmlns="http://www.w3.org/2000/svg"

                                                                    >
                                                                        <g
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="1.5"

                                                                        >
                                                                            <path
                                                                                d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854Z"

                                                                            />
                                                                            <path
                                                                                d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"

                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div
                                                                    className="jsx-3672980428 flex-1 min-width-0"

                                                                >

                                                                    <div
                                                                        className="jsx-3672980428 title text-ellipses"
                                                                    >
                                                                        {event.type?.location}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isHost && <EventManage />
                                        }

                                    </div>
                                    <div
                                        className="jsx-85398371 bottom-section flex-start gap-3"

                                    >
                                        <div
                                            className="jsx-85398371 flex-column flex-start gap-3"
                                        >
                                            <EventRegistration event={event} isHost={isHost} />
                                            <EventDescription event={event} />
                                        </div>
                                        <EventHosts event={event} />
                                    </div>
                                    <div
                                        className="jsx-85398371 bottom-section flex-start gap-3"
                                    >
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

