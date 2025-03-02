document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");
    const captureButton = document.getElementById("capture");
    const mensaje = document.getElementById("mensaje");

    async function startCamera() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            mensaje.style.color = "red";
            mensaje.textContent = "Error: Tu navegador no soporta acceso a la cámara.";
            return;
        }

        try {
            console.log("Intentando acceder a la cámara...");
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user" }, // Cámara frontal
                audio: false
            });

            video.srcObject = stream;
            mensaje.style.color = "#28a745";
            mensaje.textContent = "Cámara activada correctamente.";
        } catch (error) {
            console.error("Error al acceder a la cámara:", error);
            mensaje.style.color = "red";
            mensaje.textContent = "Error: No se pudo acceder a la cámara. Revisa los permisos.";
        }
    }

    captureButton.addEventListener("click", () => {
        mensaje.textContent = ""; // Limpiar mensaje anterior
        startCamera();
    });
});
