let isLight = false;

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