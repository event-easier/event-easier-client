import React, { useState, useEffect } from "react";
import {
    newRegistration,
} from "../services/events";

export default function EventDescription({ event }) {
    return (
        <>
            <div
                className="jsx-85398371 flex-1 flex-column gap-3 min-width-0"

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
                                Description
                            </div>
                        </div>
                    </div>
                    <div
                        className="jsx-3622075031 content"

                    >
                        <div
                            className="jsx-3788553937 flex-column content"

                        >
                            <div
                                className="jsx-3788553937 mt-2 flex-column content"

                            >
                                <div
                                    className="jsx-3788553937 cta-wrapper"

                                >
                                    <div
                                        className="jsx-3788553937 cta flex-center gap-2 mb-1"

                                    >
                                        {event.description ? (
                                            <div dangerouslySetInnerHTML={{
                                                __html: event.description
                                            }} />

                                        ) : (<div>
                                            This event has no description.
                                        </div>)}
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
