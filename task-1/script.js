const toggleBtn = document.getElementById("toggle");
    let isGray = true;

    toggleBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = isGray ? "white" : "gray";
        isGray = !isGray;
    });