// Initial state
let coins = 100;
let heartCount = 0;
let copyCount = 0;

// DOM references
const coinCountEl = document.getElementById("coinCount");
const heartCountEl = document.getElementById("heartCount");
const copyCountEl = document.getElementById("copyCount");
const copyBtnEl = document.getElementById("copyBtn");
const callHistoryContainer = document.querySelector("#cart-box .flex-grow");
const clearHistoryBtn = document.querySelector("#cart-box button");

// Utility: Get current local time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString(); // e.g., "10:45:23 AM"
}

// 💗 Heart Icon Functionality
document.querySelectorAll("button[aria-label='Add to favorites']").forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// 📞 Call Button Functionality
document.querySelectorAll("button").forEach(btn => {
  if (btn.textContent.trim() === "Call") {
    btn.addEventListener("click", () => {
      const card = btn.closest("article");
      const serviceName = card.querySelector("h2").textContent.trim();
      const serviceNumber = card.querySelector(".text-2xl").textContent.trim();

      if (coins < 20) {
        alert("Not enough coins to make a call.");
        return;
      }

      // Deduct coins
      coins -= 20;
      coinCountEl.textContent = coins;

      // Alert message
      alert(`Calling ${serviceName} at ${serviceNumber}`);

      // Add to Call History
      const entry = document.createElement("div");
      entry.className = "border bg-gray-100 border-gray-200 rounded-md p-3";
      entry.innerHTML = `
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm font-medium text-gray-800">${serviceName}</p>
            <p class="text-xs text-gray-500">${serviceNumber}</p>
          </div>
          <p class="text-xs text-gray-500">${getCurrentTime()}</p>
        </div>
      `;
      callHistoryContainer.appendChild(entry);
    });
  }
});

// 🧹 Clear History Button
clearHistoryBtn.addEventListener("click", () => {
  callHistoryContainer.innerHTML = "";
});

// 📋 Copy Button Functionality
document.querySelectorAll("button").forEach(btn => {
  if (btn.textContent.trim() === "Copy") {
    btn.addEventListener("click", () => {
      const card = btn.closest("article");
      const serviceNumber = card.querySelector(".text-2xl").textContent.trim();

      // Copy to clipboard
      navigator.clipboard.writeText(serviceNumber).then(() => {
        copyCount++;
        copyCountEl.textContent = `${copyCount} Copy`;
        alert(`Copied number: ${serviceNumber}`);
      });
    });
  }
});

// 🔁 Global Copy Button in Navbar
copyBtnEl.addEventListener("click", () => {
  alert("Use the Copy button on each card to copy hotline numbers.");
});
