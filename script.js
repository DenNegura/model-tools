import FloatMessage from "./components/FloatMessage.js";
import ThreeCanvas from "./components/ThreeCanvas.js";

document.getElementById("btn__load_model").addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".glb,.gltf";
    input.multiple = false;

    input.onchange = function () {
        if (input.files.length > 0) {
            for (const file of input.files) {
                const fileName = file.name;
                const fileType = fileName.split(".").pop();

                if (fileType === "glb" || fileType === "gltf") {
                    const reader = new FileReader();
                    reader.readAsArrayBuffer(file);
                    reader.addEventListener("load", (event) => {
                        const arrayBuffer = event.target.result;
                        ThreeCanvas.create(arrayBuffer);
                    });
                    FloatMessage.success("Loaded file: " + fileName);
                    ThreeCanvas.create(file);
                } else {
                    FloatMessage.warning("Invalid file type: " + fileName);
                }
            }
        }
    };

    input.click();
});
