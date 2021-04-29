

// Router------------------------------------------------------------------------->
const router = async () => {
    const routes =
        [
            { path: "/", view: () => console.log("Viewing Dashboard") },
            { path: "/posts", view: () => console.log("Viewing Posts") },
            { path: "/settings", view: () => console.log("Viewing Settings") }
        ];





    // Test each route for potential match ------------------------------------------->
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });




    // Check if there is Match------------------------------------------------------------------->
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);


    // if no match return to StartPage
    if (!match) {
        match = {
            route: routes[0],
            isMatch = true
        };
    }
    console.log(match.routes.view());


};



// Listen to document fully Loaded
document.addEventListener("DOMContentLoaded", () => {
    router();
});