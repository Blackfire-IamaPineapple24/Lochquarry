let isLight = false;

// Light mode
function ToggleLightMode()
{
    const lightToggleButton = document.getElementById("light-toggle-button");

    if (isLight == false)
    {
        document.body.classList.add('light-mode');
        isLight = true;
        lightToggleButton.textContent = "Dark Mode";
    }
    else
    {
        document.body.classList.remove("light-mode");
        isLight = false;
        lightToggleButton.textContent = "Light Mode";
    }
}

// Tabs for the land activities
function LandHome()
{
    document.getElementById('heading').textContent = "Land";
    document.getElementById('content').textContent = "Visitors can take part in a wide range of land-based activities on and off site.";
}
function LandHillwalking()
{
    document.getElementById('heading').textContent = "Hill Walking";
    document.getElementById('content').textContent = "From short walks around the site to Munroe-bagging expeditions, Lochquarry has it all! Walks can be tailored to suit any age or experience of groups and can last from one hour to all day adventures. Max group size 12. Ages 6+.";
}