import FloatMessage from "./components/FloatMessage.js";

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
                    console.log("File:", fileName);
                    FloatMessage.success("Loaded file: " + fileName);
                } else {
                    FloatMessage.warning("Invalid file type: " + fileName);
                    console.error("Invalid file type:", fileName);
                }
            }
        }
    };

    input.click();
});
