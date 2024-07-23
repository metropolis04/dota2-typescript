import React from "react"

interface Props {
    class? : string;
    width? : string;
    height?: string;
}

export const JoystickIcon:React.FunctionComponent<Props> = (props) => {

    const myClass = props.class ? `${props.class} bi bi-joystick` : "bi bi-joystick"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
                <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2"/>
                <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23"/>
            </svg>
        </>
    )
}

export const UnityIcon:React.FunctionComponent<Props> = (props) => {

    const myClass = props.class ? `${props.class} bi bi-unity` : "bi bi-unity"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
                <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8z"/>
            </svg>
        </>
    )
}

export const PlayersIcon:React.FunctionComponent<Props> = (props) => {

    const myClass = props.class ? `${props.class} bi bi-person-lines-fill` : "bi bi-person-lines-fill"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
            </svg>
        </>
    )
}

export const ClockIcon:React.FunctionComponent<Props> = (props) => {

    const myClass = props.class ? `${props.class} bi bi-clock` : "bi bi-clock"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
            </svg>
        </>
    )
}

export const BaseIcon:React.FunctionComponent<Props> = (props) => {

    const myClass = props.class ? `${props.class} bi bi-database-fill` : "bi bi-database-fill"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
                <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
                <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
            </svg>
        </>
    )
}

export const CalendarIcon:React.FunctionComponent<Props> = (props) => {

    const myClass = props.class ? `${props.class} bi bi-calendar-event` : "bi bi-calendar-event"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
        </>
    )
}

export const ArrowRightShort:React.FunctionComponent<Props> = (props) => {

    
    const myClass = props.class ? `${props.class} bi bi-arrow-right-short` : "bi bi-arrow-right-short"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
        </>
    )
}

export const ArrowDownFilter:React.FunctionComponent<Props> = (props) => {

   const myClass = props.class ? `${props.class} bi bi-chevron-compact-down` : "bi bi-chevron-compact-down"

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"  width={props.width ?? "16"} height={props.height ?? "16"} fill="currentColor" className={myClass} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
            </svg>
        </>
    )
}