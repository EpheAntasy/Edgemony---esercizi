export const shortDescription = (str) =>
  str.split(" ").splice(0, 8).join(" ") + "...";

export const shortTitle = (str) => str.split(" ").splice(0, 3).join(" ")
