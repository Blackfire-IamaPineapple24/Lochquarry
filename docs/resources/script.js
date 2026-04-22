let isLight = false;

// Light mode
function ToggleLightMode()
{
    const lightToggleButton = document.getElementById("light-toggle-button");
    const map = document.getElementById('map');

    if (isLight == false)
    {
        document.body.classList.add('light-mode');
        map.src = "resources/images/map.webp"
        isLight = true;
        lightToggleButton.textContent = "Dark Mode";
    }
    else
    {
        document.body.classList.remove("light-mode");
        map.src = "resources/images/darkmap.webp"
        isLight = false;
        lightToggleButton.textContent = "Light Mode";
    }
}

// #region Tabs for the land activities
function LandHome()
{
    document.getElementById('heading').textContent = "Land";
    document.getElementById('content').textContent = "Visitors can take part in a wide range of land-based activities on and off site.";
    document.getElementById('image').src = "resources/images/castle.webp";
    document.getElementById('info').textContent = "";
    document.getElementById('link').textContent = "https://bsky.app/profile/robbieelliot.bsky.social";
    document.getElementById('link').href = "https://bsky.app/profile/robbieelliot.bsky.social";
}
function LandHillwalking()
{
    document.getElementById('heading').textContent = "Hill Walking";
    document.getElementById('content').textContent = "From short walks around the site to Munroe-bagging expeditions, Lochquarry has it all! Walks can be tailored to suit any age or experience of groups and can last from one hour to all day adventures.";
    document.getElementById('image').src = "resources/images/hillwalk.webp";
    document.getElementById('info').textContent = "Max group size 12. Ages 6+.";
    document.getElementById('link').textContent = "https://www.gooutdoors.co.uk/collections/walking-hiking";
    document.getElementById('link').href = "https://www.gooutdoors.co.uk/collections/walking-hiking";
}
function LandArchery()
{
    document.getElementById('heading').textContent = "Archery";
    document.getElementById('content').textContent = "Are you the next Robin Hood? Learn to hold a bow and fire an arrow and take part in fast and fun shootout competitions.";
    document.getElementById('image').src = "resources/images/archery.webp";
    document.getElementById('info').textContent = "Max group size 12. Ages 6+";
    document.getElementById('link').textContent = "https://gowildoutdoors.co.uk/archery-and-axe-throwing/";
    document.getElementById('link').href = "https://gowildoutdoors.co.uk/archery-and-axe-throwing/";
}
function LandOrienteering()
{
    document.getElementById('heading').textContent = "Orienteering";
    document.getElementById('content').textContent = "Set in the centre's grounds, find all the markers and make it back in time to show off your superior navigation knowledge.";
    document.getElementById('image').src = "resources/images/orienteering.webp";
    document.getElementById('info').textContent = "Groups of 2+, one map per group. Ages 6+";
    document.getElementById('link').textContent = "https://goorienteering.org.uk/";
    document.getElementById('link').href = "https://goorienteering.org.uk/";
}
function LandAxeThrowing()
{
    document.getElementById('heading').textContent = "Axe Throwing";
    document.getElementById('content').textContent = "Take yourself back to a time of Vikings and have a go at throwing an axe. Try to hit the target, better yet throw yourself a bullseye.";
    document.getElementById('image').src = "resources/images/axethrow.webp";
    document.getElementById('info').textContent = "Max group size 6. Ages 6+";
    document.getElementById('link').textContent = "https://gowildoutdoors.co.uk/archery-and-axe-throwing/";
    document.getElementById('link').href = "https://gowildoutdoors.co.uk/archery-and-axe-throwing/";
}
// #endregion

// #region Tabs for the water activities.
function WaterHome()
{
    document.getElementById('heading').textContent = "Water";
    document.getElementById('content').textContent = "Water-based activities all take place on Lochquarry itself.";
    document.getElementById('image').src = "resources/images/boat.webp";
    document.getElementById('info').textContent = "";
    document.getElementById('link').textContent = "https://bsky.app/profile/mhunter.bsky.social";
    document.getElementById('link').href = "https://bsky.app/profile/mhunter.bsky.social";
}
function WaterKayaking()
{
    document.getElementById('heading').textContent = "Kayaking";
    document.getElementById('content').textContent = "Have a go at paddling, rolling, and rafting in one of our brand-new kayaks.";
    document.getElementById('image').src = "resources/images/kayak.webp";
    document.getElementById('info').textContent = "Max group size 8. Ages 8+";
    document.getElementById('link').textContent = "https://www.gooutdoors.co.uk/collections/boats-and-kayaks";
    document.getElementById('link').href = "https://www.gooutdoors.co.uk/collections/boats-and-kayaks";
}
function WaterCanoeing()
{
    document.getElementById('heading').textContent = "Canoeing";
    document.getElementById('content').textContent = "Work single-handedly or in pairs to canoe the length of Lochquarry. You can even take a picnic with you and explore some of the Loch's islands.";
    document.getElementById('image').src = "resources/images/canoe.webp";
    document.getElementById('info').textContent = "Max group size 8 boats (Up to 16 people). Ages 12+";
    document.getElementById('link').textContent = "https://www.gooutdoors.co.uk/collections/watersports";
    document.getElementById('link').href = "https://www.gooutdoors.co.uk/collections/watersports";
}
function WaterPowerboating()
{
    document.getElementById('heading').textContent = "Powerboating";
    document.getElementById('content').textContent = "Take control of one of the Centre's two RIBs out on Lochquarry and try your hand at powerboating.";
    document.getElementById('image').src = "resources/images/powerboating.webp";
    document.getElementById('info').textContent = "Max group size 6. Ages 12+";
    document.getElementById('link').textContent = "https://www.scouts.org.uk/activities/powerboating/";
    document.getElementById('link').href = "https://www.scouts.org.uk/activities/powerboating/";
}
// #endregion

// #region Tabs for the rope activities.
function RopeHome()
{
    document.getElementById('heading').textContent = "Rope";
    document.getElementById('content').textContent = "All rope-based activities take place on site with full safety equipment provided."; // Lovely :)
    document.getElementById('image').src = "resources/images/rope.webp";
    document.getElementById('info').textContent = "";
    document.getElementById('link').textContent = "https://bsky.app/profile/mikenlng.bsky.social";
    document.getElementById('link').href = "https://bsky.app/profile/mikenlng.bsky.social";
}
function RopeClimbing()
{
    document.getElementById('heading').textContent = "Climbing";
    document.getElementById('content').textContent = "Scale to the highs of one of the local quarry slabs.";
    document.getElementById('image').src = "resources/images/climbing.webp";
    document.getElementById('info').textContent = "Max group size 8. Ages 8+";
    document.getElementById('link').textContent = "https://www.gooutdoors.co.uk/collections/climbing";
    document.getElementById('link').href = "https://www.gooutdoors.co.uk/collections/climbing";
}
function RopeAbseiling()
{
    document.getElementById('heading').textContent = "Abseiling";
    document.getElementById('content').textContent = "Take the scary step aand abseil from the top of one of the local quarry slabs. There is a lovely view... if you are brave enough to look down!";
    document.getElementById('image').src = "resources/images/abseiling.webp";
    document.getElementById('info').textContent = "Max group size 8. Ages 8+";
    document.getElementById('link').textContent = "https://www.gooutdoors.co.uk/collections/climbing-belay-devices-and-descenders";
    document.getElementById('link').href = "https://www.gooutdoors.co.uk/collections/climbing-belay-devices-and-descenders";
}
function RopePoleClimb()
{
    document.getElementById('heading').textContent = "Pole Climb";
    document.getElementById('content').textContent = "Ever wondered how telephone engineers get to the top of the telephone poles? Well, here's your chance to find out."; // Or you could just Google it...
    document.getElementById('image').src = "resources/images/poleclimb.webp";
    document.getElementById('info').textContent = "Max group size 8. Ages 8+";
    document.getElementById('link').textContent = "https://www.gooutdoors.co.uk/blogs/article/expert-advice-give-it-a-go-climbing";
    document.getElementById('link').href = "https://www.gooutdoors.co.uk/blogs/article/expert-advice-give-it-a-go-climbing";
}
// #endregion