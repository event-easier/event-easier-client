import React, { useState, useEffect, } from "react";
import {
    findOne,
    newRegistration,
} from "../services/events";

export default function EventRegistration({ event, isHost }) {
    const [eventData, setEventData] = useState(event);
    const userId = JSON.parse(localStorage.getItem("profile-data"))._id
    const [guestData, setGuestData] = useState(eventData?.guests);

    const d = new Date(eventData?.start_time);
    const d1 = new Date();
    const isPastEvent = () => {
        return d < d1;
    };
    const dayPast = () => {
        return Math.abs(d1 - d) / (1000 * 3600 * 24);
    };

    const fetchEventData = async () => {
        const _event = await findOne({
            _id: eventData?._id,
        });
        setEventData(_event);

    };

    const fetchGuestsData = () => {
        const _guest = eventData.guests.find((g) => g.user_id === userId);
        _guest ? setGuestData(_guest) : [];
    };

    const handelnewRegistration = async () => {

        const _newReg = await newRegistration({
            _id: event?._id,
            userId: userId,
        });
        fetchEventData();
        //fetchGuestsData();

    };

    useEffect(() => {
        fetchEventData();
    }, []);

    useEffect(() => {
        fetchGuestsData();
    }, [handelnewRegistration]);

    return (
        <>
            <div
                className="jsx-85398371 flex-1 flex-column gap-3 min-width-0"
                style={{
                    width: "100%"
                }}
            >
                {guestData?.length !== 0 ? (

                    <div className="jsx-1288047318" >
                        <div
                            className="lux-collapse shown"

                        >
                            <div
                                className="jsx-2087604305 content-card"

                            >
                                <div
                                    className="jsx-2087604305 content"

                                >
                                    <div
                                        className="jsx-1288047318 top flex-column gap-3"

                                    >
                                        <div
                                            className="jsx-2227798111"

                                        >
                                            <div
                                                className="jsx-2227798111 flex-start spread mr-1"

                                            >
                                                <div
                                                    className="jsx-1565252694 avatar-wrapper"

                                                >
                                                    <div
                                                        className="jsx-1565252694 avatar"
                                                        style={{
                                                            boxSizing: "border-box",
                                                            borderRadius: "1000px",
                                                            backgroundPosition: "center center",
                                                            width: "2.5rem",
                                                            height: "2.5rem",
                                                            backgroundSize: "cover",
                                                            backgroundColor: "#fff",
                                                            position: "relative",
                                                            backgroundImage:
                                                                'url("https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=40,height=40/avatars-default/avatar_13.png")',
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
                                            </div>
                                            <div
                                                className="jsx-2227798111 title mt-2"

                                            >
                                                Thank You for Joining
                                            </div>
                                            <div
                                                className="jsx-2227798111 desc text-tinted"

                                            >
                                                We hope you enjoyed the event!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (

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
                                            d="M3.204 1.25C1.44 1.25.251 2.938.251 4.692V6.146c-.001.068-.001.163.007.247a.96.96 0 0 0 .162.466c.142.205.348.298.411.327l.005.002c.083.038.185.076.277.11l.016.007c.177.066.394.309.394.696 0 .387-.217.63-.394.696l-.017.007c-.091.034-.193.072-.276.11l-.005.002c-.063.029-.269.122-.411.327a.96.96 0 0 0-.162.465c-.008.084-.008.18-.008.247v1.453c0 1.755 1.188 3.443 2.954 3.443h9.592c1.766 0 2.954-1.688 2.954-3.443V9.854c0-.068 0-.163-.008-.247a.96.96 0 0 0-.162-.465c-.142-.205-.348-.298-.411-.327l-.005-.003a4.503 4.503 0 0 0-.276-.11l-.017-.006c-.177-.066-.394-.309-.394-.696 0-.387.217-.63.394-.696l.017-.007c.091-.034.193-.072.276-.11l.005-.002a.993.993 0 0 0 .411-.327.96.96 0 0 0 .162-.466c.008-.084.008-.179.008-.247V4.693c0-1.755-1.19-3.443-2.954-3.443H3.204ZM1.751 4.693c0-1.221.784-1.943 1.453-1.943H9.25v3.008a.75.75 0 0 0 1.5 0V2.75h2.046c.669 0 1.453.722 1.453 1.943v1.244c-.788.344-1.272 1.178-1.272 2.063 0 .885.484 1.72 1.273 2.063v1.244c0 1.221-.784 1.943-1.454 1.943H10.75v-2.492a.75.75 0 0 0-1.5 0v2.492H3.204c-.67 0-1.454-.722-1.454-1.943v-1.244C2.54 9.719 3.023 8.885 3.023 8c0-.885-.484-1.72-1.273-2.063V4.693Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            style={{ boxSizing: "border-box" }}
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="jsx-3622075031 title-label"

                                >
                                    Registration
                                </div>
                            </div>
                        </div>
                        <div
                            className="jsx-3622075031 content"

                        >
                            <div
                                className="jsx-3788553937 flex-column content"

                            >
                                {isPastEvent() ? (
                                    <div
                                        className="jsx-3792584099 info-rows flex-column"

                                    >

                                        <div
                                            className="jsx-4058773777 flex-center info-row"

                                        >
                                            <div
                                                className="jsx-4058773777 icon flex-center-center rounded"

                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                        boxSizing: "border-box",
                                                        verticalAlign: "middle",
                                                        display: "block",
                                                        width: "1.125rem",
                                                        height: "1.125rem",
                                                    }}
                                                >
                                                    <path
                                                        d="M6 .5a1 1 0 0 1 1 1v1.065C8.098 2.5 9.398 2.5 10.933 2.5H13.067c1.535 0 2.835 0 3.933.065V1.5a1 1 0 1 1 2 0v1.314c.918.2 1.71.538 2.397 1.124.239.204.461.426.665.665.779.912 1.12 2.012 1.281 3.343.157 1.293.157 2.929.157 4.987v.134c0 2.058 0 3.694-.157 4.987-.162 1.33-.502 2.431-1.28 3.343a5.995 5.995 0 0 1-.666.665c-.912.779-2.012 1.12-3.343 1.281-1.293.157-2.929.157-4.987.157H10.933c-2.058 0-3.694 0-4.987-.157-1.33-.162-2.431-.502-3.343-1.28a5.997 5.997 0 0 1-.665-.666c-.779-.912-1.12-2.012-1.281-3.343C.5 16.761.5 15.125.5 13.067v-.134c0-2.058 0-3.694.157-4.987.162-1.33.502-2.431 1.28-3.343a6 6 0 0 1 .666-.665C3.29 3.352 4.083 3.014 5 2.814V1.5a1 1 0 0 1 1-1Zm.187 4.142c-1.135.138-1.794.397-2.285.816a4 4 0 0 0-.444.444c-.42.491-.678 1.15-.816 2.285a12.54 12.54 0 0 0-.033.313h18.783c-.01-.107-.022-.212-.034-.313-.138-1.135-.397-1.794-.816-2.285a4.004 4.004 0 0 0-.444-.444c-.491-.42-1.15-.678-2.285-.816C16.655 4.502 15.14 4.5 13 4.5h-2c-2.14 0-3.655.002-4.813.142ZM2.5 13c0-.948 0-1.774.013-2.5h18.974c.013.726.013 1.552.013 2.5 0 2.14-.002 3.655-.142 4.813-.138 1.135-.397 1.794-.816 2.285-.136.16-.285.308-.444.444-.491.42-1.15.678-2.285.816-1.158.14-2.673.142-4.813.142h-2c-2.14 0-3.655-.002-4.813-.142-1.135-.138-1.794-.397-2.285-.816a4.004 4.004 0 0 1-.444-.444c-.42-.491-.678-1.15-.816-2.285C2.502 16.655 2.5 15.14 2.5 13Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"

                                                    />
                                                </svg>
                                            </div>

                                            <div
                                                className="jsx-4058773777"

                                            >
                                                <div
                                                    className="jsx-4058773777 title fw-medium"

                                                >
                                                    Past Event
                                                </div>
                                                <div
                                                    className="jsx-4058773777 desc text-tinted"

                                                >
                                                    This event ended {dayPast()} days ago.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (<></>)}
                                <div style={{ boxSizing: "border-box" }}>
                                    {isHost ? <div>
                                        You are the host of this event.
                                    </div> : <div>
                                        Hello! To join the event, please register below.

                                    </div>}
                                </div>
                                <div
                                    className="jsx-3788553937 mt-2 flex-column content"

                                >
                                    <div
                                        className="flex-center user-row gap-2"

                                    >
                                        <div
                                            className="jsx-2935012278 avatar-wrapper small"

                                        >
                                            <div
                                                className="jsx-2935012278 avatar"
                                                style={{
                                                    boxSizing: "border-box",
                                                    borderRadius: "1000px",
                                                    backgroundPosition: "center center",
                                                    width: "1.25rem",
                                                    height: "1.25rem",
                                                    backgroundSize: "cover",
                                                    backgroundColor: "#fff",
                                                    position: "relative",
                                                    backgroundImage:
                                                        'url("https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=20,height=20/avatars-default/avatar_13.png")',
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
                                                        style={{
                                                            boxSizing: "border-box",
                                                            margin: "max(1px,10%)",
                                                            borderRadius: "100%",
                                                            width: "calc(100% - 2 * max(1px,10%))",
                                                            height: "calc(100% - 2 * max(1px,10%))",
                                                            backgroundColor: "#ec660d",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex-baseline flex-wrap min-width-0"

                                        >
                                            <b
                                                className="mr-1 text-ellipses"

                                            >
                                                {eventData?.hosts[0].name}
                                            </b>
                                            <span
                                                className="text-tinted email text-ellipses"

                                            >
                                                {eventData?.hosts[0].email}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="jsx-3788553937 cta-wrapper"

                                    >
                                        {
                                            !isHost &&
                                            <div>
                                                <div
                                                    className="jsx-3788553937 cta flex-center gap-2 mb-1"

                                                >

                                                    <button
                                                        className="btn luma-button flex-center medium primary solid full-width no-icon"
                                                        type="button"
                                                        onClick={handelnewRegistration}
                                                    // disabled
                                                    >
                                                        <div
                                                            className="label"

                                                        >
                                                            One-Click Register
                                                        </div>
                                                    </button>
                                                </div>
                                                <div
                                                    className="lux-collapse"

                                                >
                                                    <div
                                                        className="jsx-3788553937 pt-2 pb-1 text-tinted flex-center gap-2 crypto-footer"

                                                    >
                                                        <svg
                                                            viewBox="0 0 80 80"
                                                            xmlns="http://www.w3.org/2000/svg"

                                                        >
                                                            <path
                                                                d="M63.984 40.75 40 55.25l-24-14.5L40 0l23.984 40.75ZM40 59.906l-24-14.5L40 80l24-34.594-24 14.5Z"
                                                                fill="currentColor"
                                                                style={{ boxSizing: "border-box" }}
                                                            />
                                                        </svg>
                                                        <div
                                                            className="jsx-3788553937 fs-xs"

                                                        >
                                                            You will be asked to verify token ownership with your
                                                            wallet.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
