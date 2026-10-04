function calculateSimilarity() {

    let text1 = document.getElementById("text1").value.toLowerCase();
    let text2 = document.getElementById("text2").value.toLowerCase();

    let words1 = new Set(
        text1.replace(/[.,!?;:]/g, "")
        .split(/\s+/)
        .filter(word => word !== "")
    );

    let words2 = new Set(
        text2.replace(/[.,!?;:]/g, "")
        .split(/\s+/)
        .filter(word => word !== "")
    );

    if (words1.size === 0 || words2.size === 0) {
        document.getElementById("result").innerText =
            "Please enter both texts.";
        return;
    }

    let commonWords = 0;

    for (let word of words1) {
        if (words2.has(word)) {
            commonWords++;
        }
    }

    let totalWords = new Set([...words1, ...words2]).size;

    let similarity = (commonWords / totalWords) * 100;

    document.getElementById("result").innerText =
        "Similarity: " + similarity.toFixed(2) + "%";
}
