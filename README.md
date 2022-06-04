```
npm i
npm start
```

## intro

This project is all about implementing left bar responsive menus in this standard react application.

There are 2 menus:
 - the burger button to switch from the map page to other pages like the marketplace, etc...
 - the translucid left side bar menu that is used to interact with the map

This project is about replicating the menu UI from here: https://app.nextearth.io/buy-land

This project is not about implementing any interaction with the map!
Please create a button on the bottom right of the screen to simulate selecting a land.

## the code

The code of the application is provided and available here: https://github.com/johhnsmmith198/web-app-outsource
The code already use react-bootstrap.
If you need to install more node modules please advise me on import before doing so.


## The burger button

the burger button display a menu to go to different pages.

When its not expended the menu look like this on mobile (just a burger button)
![Burger Mobile](./images/side_menu_mobile.png)
the burger menu is always visible on desktop
![Burger Desktop](./images/menu_burger_button_mobile.png)


It expands like this on mobile, showing a menu to switch to different pages:
![Burger Menu Mobile](./images/menu_burger_button_mobile.png)
on desktop
![Burger Menu Desktop](./images/menu_burger_button_desktop.png)



## translucid menu

Selecting a land (OR clicking on your button) would display the number of the selected tile on the side bar
![Desktop Side Menu Land Selected](./images/side_menu_desktop_map_land_selected.jpg)
Clicking the circled red button would expend the translucid menu to display some info:
NOTE: Please create some dumb infos with Card, Text, Paragraph, Buttons to simulate displaying land information
![Desktop Side Menu Land Selected Info Displayed](./images/land_info_display_desktop.png)

Mobile when nothing is selected
![Mobile No Selection](./images/side_menu_mobile.p:wng)
Mobile when a land is selected
![Mobile Land Selected](./images/side_menu_mobile_map_land_selected.png)
Mobile when a land is selected and the info displayed (to display infos, you have to click on the "eye" icon)
![Mobile Land Selected Info Displayed](./images/land_info_display_mobile.png)
