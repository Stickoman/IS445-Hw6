const addCollegeOfBusinessLink = () => {
    const linksList = document.getElementById("links");

    const newListItem = document.createElement("li");
    const newLink = document.createElement("a");

    newLink.href = "https://www.csulb.edu/college-of-business";
    newLink.textContent = "College of Business";

    newListItem.appendChild(newLink);
    linksList.insertBefore(newListItem, document.getElementById("is"));
};
