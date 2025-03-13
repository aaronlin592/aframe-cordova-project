AFRAME.registerComponent("clock", {
  schema: {},

  init: function () {
    // Create text element for the clock display
    this.titleEl = document.createElement("a-text");
    this.titleEl.setAttribute("position", { x: 2.4, y: -0.5, z: 0 });
    this.titleEl.setAttribute("color", "#00ff00");
    this.titleEl.setAttribute("font", "sourcecodepro");
    this.titleEl.setAttribute("align", "center");
    this.el.appendChild(this.titleEl);

    // tooltip/hint
    this.tooltip = document.createElement("a-text");
    this.tooltip.setAttribute("position", { x: 2.4, y: -1, z: 0 });
    this.tooltip.setAttribute("color", "#ff0000");
    this.tooltip.setAttribute("font", "sourcecodepro");
    this.tooltip.setAttribute("value", "Press anywhere in the blue to change time zones!");
    this.tooltip.setAttribute("scale", "0.5 0.5 0.5");
    this.tooltip.setAttribute("align", "center");
    this.el.appendChild(this.tooltip);

    // circle background
    this.changeTimeZoneButton = document.createElement("a-circle");
    this.changeTimeZoneButton.setAttribute("position", { x: 2.4, y: -0.5, z: 0 });
    this.changeTimeZoneButton.setAttribute("color", "#0000FF");
    this.changeTimeZoneButton.setAttribute("radius", "1.6");
    this.el.appendChild(this.changeTimeZoneButton);

    // list of time zones to cycle through
    this.timeZones = ["Local", "London", "New York", "Tokyo", "Hawaii", "Korea"];
    this.currentIndex = 0;

    // Update time initially
    this.updateTime();

    // click event listener for entire element
    this.el.addEventListener("click", () => {
      this.currentIndex = (this.currentIndex + 1) % this.timeZones.length;
      this.updateTime();
    });

    // updates the time every second
    this.interval = setInterval(() => this.updateTime(), 1000);
  },

  updateTime: function () {
    let now = spacetime.now();
    let timeZone = this.timeZones[this.currentIndex];
    let convertedTime = timeZone === "Local" ? now : convertTimeZone(now, timeZone);
    let displayString = `Time in ${timeZone}: ${displayTime(convertedTime)}`;

    // updates the text display
    this.titleEl.setAttribute("value", displayString);
  },

  remove: function () {
    clearInterval(this.interval);
  }
});
