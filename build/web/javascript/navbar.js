'use strict';


/*
* Javascript for the navigation bar
* @author Mikael R
*/

const mainMenu = document.querySelector("#main-menu");
const submenu1 = document.getElementById("start-sub-menu-1");
const submenu2 = document.getElementById("start-sub-menu-2");
const arrowElement = document.getElementById("right");
const arrowElement2 = document.getElementById("right2");
const headerButton = document.getElementById("menu-button");
const submenu1Button = document.getElementById("sub-menu-button-1");
const submenu2Button = document.getElementById("user-icon");

mainMenu.style.display = 'none';
submenu1.style.display = 'none';
submenu2.style.display = 'none';

console.log("Cookie: " + document.cookie);

headerButton.addEventListener('click', () => {
 if (mainMenu.style.display === 'none') {
        console.log("Works");
        console.log("Works or not");
        mainMenu.style.display = 'inline-block';
  } else {
     mainMenu.classList.toggle('sub-menu-closed');
     submenu1.style.display = 'none';
     submenu2.style.display = 'none';
     arrowElement.style.transform = 'rotate(-45deg)';
     arrowElement2.style.transform = 'rotate(-45deg)';
    }
});

submenu1Button.addEventListener('click', () => {
 if (submenu1.style.display === 'none') {
        submenu1.style.display = 'inline-block';
        arrowElement.style.transform = 'rotate(45deg)';
  } else {
     submenu1.style.display = 'none';
     arrowElement.style.transform = 'rotate(-45deg)';
    }
});

submenu2Button.addEventListener('click', () => {
 if (submenu2.style.display === 'none') {
        submenu2.style.display = 'inline-block';
        arrowElement2.style.transform = 'rotate(45deg)';
  } else {
     submenu2.style.display = 'none';
     arrowElement2.style.transform = 'rotate(-45deg)';
    }
});


/*----------------If you are logged in run this----------------------*/

if (loggedIn()) {
    
    buildRightCornerMenu();

    /*------------------REMOVING COOKIE ----------------*/
    const logOutButton = document.getElementById("log-out-button");

    logOutButton.addEventListener('click', () => {

        deleteCookies();
        window.location.href = "index.html";
    });
}

function deleteCookies() {
    console.log("Cookies deleted");   
    
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.');
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
} // end deleteCookies()

function buildRightCornerMenu() {
      
const request = { 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded',  
        'Cookie': document.cookie},
        method: 'POST',
        credentials: 'same-origin',
        body: `${document.cookie}`
    };

// I'll just re-use this general method here... no harm in returning a few extra values
fetch('App/ProfileService/GetUserStats', request).then((response) => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');

    }).then((myJson) => {

        if (myJson.status === 'gotUserStats') {

            document.getElementById("profile-link").style.display = 'list-item';
            document.getElementById("user-list").style.display = 'list-item';
            document.getElementById("admin-panel").style.display = 'list-item';
            document.getElementById('user-icon').innerHTML = `<img src="${myJson.pic}" class="img-circle" id="pepe"></a>
            <ul class="pepe-menu" id="pepe-menu-id">
            <li><a href="profile.html">My profile</a></li>
            <li><a href="settings.html">Settings</a></li>
            <li id="log-out-button">Log out</li>
            </ul>`;
            
            /*-----------PROFILE ICON MENU--------------*/

            const profileElement = document.querySelector("#pepe-menu-id");
            const pepeButton = document.getElementById("pepe");


            profileElement.style.display = 'none';

            pepeButton.onclick = function () {
                if (profileElement.style.display === 'none') {
                    profileElement.style.display = 'inline';
              } else {
                 profileElement.style.display = 'none';
                }
            };

        } else {
            console.log("Failed to fetch user pic!");
            return null;
        }
    }).catch(function(error) {
        
        console.log('There has been a problem with your fetch operation: ' + error.message);
    }); // end fetch()
}; // end buildRightCornerMenu()
