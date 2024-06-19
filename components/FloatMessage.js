export default class FloatMessage {
    static __type() {
        return {
            WARNING: "type__warning__class",

            ERROR: "type__error__class",

            INFO: "type__info__class",

            SUCCESS: "type__success__class",
        };
    }

    static __print(cssClass, message) {
        const notificationContainer = document.getElementById(
            "frame__notification"
        );
        const notificationElement = document.createElement("div");
        notificationElement.classList.add("notification");
        notificationElement.classList.add(cssClass);

        const messageElement = document.createElement("p");
        messageElement.classList.add("notification-message");
        messageElement.textContent = message;

        const closeButton = document.createElement("button");
        closeButton.classList.add("notification-button");
        closeButton.textContent = "X";
        closeButton.addEventListener("click", () => {
            notificationElement.remove();
        });

        notificationElement.appendChild(messageElement);
        notificationElement.appendChild(closeButton);
        notificationContainer.appendChild(notificationElement);

        // Auto-hide after 5 seconds
        setTimeout(() => {
            notificationElement.remove();
        }, 5000);
    }

    static warning(message) {
        FloatMessage.__print(FloatMessage.__type().WARNING, message);
    }

    static error(message) {
        FloatMessage.__print(FloatMessage.__type().ERROR, message);
    }

    static info(message) {
        FloatMessage.__print(FloatMessage.__type().INFO, message);
    }

    static success(message) {
        FloatMessage.__print(FloatMessage.__type().SUCCESS, message);
    }
}
