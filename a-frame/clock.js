AFRAME.registerComponent("clock", {
  schema: {},

  init: function () {
    // Create text element for the clock display
    this.titleEl = document.createElement("a-text");
    this.titleEl.setAttribute("position", { x: 1, y: 0, z: 0 });
    this.titleEl.setAttribute("color", "#00ff00");
    this.titleEl.setAttribute("font", "sourcecodepro");
    this.el.appendChild(this.titleEl);

    // List of time zones to cycle through
    this.timeZones = ["Local", "London", "New York", "Tokyo"];
    this.currentIndex = 0;

    // Update time initially
    this.updateTime();

    // Add click interaction to cycle through time zones
    this.el.addEventListener("click", () => {
      this.currentIndex = (this.currentIndex + 1) % this.timeZones.length;
      this.updateTime();
    });

    // Update time every second
    this.interval = setInterval(() => this.updateTime(), 1000);
  },

  updateTime: function () {
    let now = spacetime.now();
    let timeZone = this.timeZones[this.currentIndex];
    let convertedTime = timeZone === "Local" ? now : convertTimeZone(now, timeZone);
    let displayString = `Time in ${timeZone}: ${displayTime(convertedTime)}`;

    // Update text display
    this.titleEl.setAttribute("value", displayString);
  },

  remove: function () {
    clearInterval(this.interval); // Stop interval when the component is removed
  }
});
