/*   STEP 1   */
export const leagueID = "1049456153182724096"; // your league ID
export const leagueName = "Papa Murphy & The Boys"; // your league name
export const dues = 100;
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to Papa Murphy & The Boys (PM&B) Fantasy Football League. PM&B began in 2021 when 10 ball knowers decided to start a Fantasy league that was about one thing: Football. It was started to bring friends and family closer together through the love of the game, turning a shared passion into an engaging and competitive community. It was founded on the belief that sports have the power to unite people, offering a platform for camaraderie, friendly rivalry, and memorable moments. Through accountability and immersion, the league not only amplifies each manager's enjoyment of football but also fosters deeper connections and lasting friendships. This league transforms every touchdown and tackle into a celebration of teamwork, strategy, and the sheer joy of playing and competing together. Long Live the League   </p>
  <p>In 2024 PM&B has expanded to 16 teams, creating one of the most competitive Fantasy Football leagues in the country. Each manager brings a top tier knowledge of football to the table, and each week they are demanded to put that knowledge on display.</p>
  
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
    //   Ryan Murphy Magager Page
         "managerID": "469516529285722112",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Ryan Murphy",
         "location": "North Liberty, Iowa", // (optional)
         "bio": "Ryan works for NCIS. Or is it NISC. Married to the lovely Karlee, and knows tons of ball. Your fearless commissioner.",
         "photo": "/managers/Ryan.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Gabe Simpson", // Can be anything (usually your rival's name)
           link: 2, // manager array number within this array, or null to link back to all managers page
           image: "/managers/Gabe.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 6777, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "When it comes to wide receivers, Stack em' deep and sell em' cheap.", // (optional)
         "tradingScale": 4, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    //   GABE Simpson Manager page
         "managerID": "470433709049245696",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Gabe Simpson",
         "location": "Colfax, Iowa", // (optional)
         "bio": "Gabe is a teacher in the Colfax Mingo School District where he also coaches just about every sport. He is married and has a baby boy. Gabe already has a full trophy room and looks to add more this season.",
         "photo": "/managers/Gabe.JPEG", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Camden Glenn", // Can be anything (usually your rival's name)
           link: 9, // manager array number within this array, or null to link back to all managers page
           image: "/managers/Camden.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 100, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Find high floor players who are undervalued. Rarely try and guess the 'breakout' players, and only trade when you're confident", // (optional)
         "tradingScale": 4, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    //   Kyle Martens Manager Page
         "managerID": "606945493414633472",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Kyle Martens",
         "location": "West Des Moines, Iowa", // (optional)
         "bio": "Kyle lives in Des Moines with his wife and son nicknamed Minitron. As a long suffering Lions fan, he hopes the suffering for his fantyasy team ends quicker then the 32 year playoff victory drought the Lions faced.",
         "photo": "/managers/Kyle.JPEG", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Anders Almberg", // Can be anything (usually your rival's name)
           link: 14, // manager array number within this array, or null to link back to all managers page
           image: "/managers/Ders.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 7547, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Try Not to Suck", // (optional)
         "tradingScale": 6.5, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
     {
    //   Cole Borwick Manager Page
         "managerID": "737338251186208768",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Cole Borwick",
         "location": "Tiffin, Iowa", // (optional)
         "bio": "Cole, a proud resident of Tiffin Iowa, crunches the numbers for what seems like the entire Eastern Iowa Corridor. Newest member to the league, CB brings a sharp mind and the nastiest trash talk to the North Division.  ",
         "photo": "/managers/CB.JPG", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Jordan Gunti", // Can be anything (usually your rival's name)
           link: 11, // manager array number within this array, or null to link back to all managers page
           image: "/managers/Jordan.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 223, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Embrace the chaos, exploit the unexpected, and thrive in the unpredictable ebb and flow of the fantasy football universe.", // (optional)
         "tradingScale": 4, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

   {
    //   Casey Blaylock Manager Page
         "managerID": "606970146476597248",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Casey Blaylock",
         "location": "Chicago, Illinois", // (optional)
         "bio": "Casey is the newest husband in the league and now a Chicago native. Boston Scientific's finest, he aims to install a word class pace maker in the heart of his team and recapture the coveted PM&B championship. ",
         "photo": "/managers/Casey.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Alan Mazzarella", // Can be anything (usually your rival's name)
           link: 15, // manager array number within this array, or null to link back to all managers page
           image: "/managers/Alan.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 348, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Draft well and try not to drop or trade away Dolphins RBs who combine for 31 TDs...", // (optional)
         "tradingScale": 7, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
     {
    //   Nolan Osland Manager Page
         "managerID": "730636154742886400",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Nolan Osland",
         "location": "Iowa City, Iowa", // (optional)
         "bio": "Nolan is problably the strongest member of the PM&B, even before he gained Dad strength after the birth of his daughter. Iowa City resident, confident in his Steelers and his decision making, Nolan brings a gritty personality to the PM&B.",
         "photo": "/managers/Nolan.JPG", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Cole Hauser", // Can be anything (usually your rival's name)
           link: 7 , // manager array number within this array, or null to link back to all managers page
           image: "/managers/Hauser.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 4510, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Don't make trades with snakes", // (optional)
         "tradingScale": 7, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
    //   Cole Hauser Manager Page
         "managerID": "731219307652059136",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Cole Hauser",
         "location": "West Branch, Iowa", // (optional)
         "bio": "Big Cole Hauser (That's Mr. Hauser to you Liberty Lightning students), reutrns to the greater Iowa City area with a wife and newfound love for the.. Chiefs? Hauser gets his guys and sticks with them.",
         "photo": "/managers/Hauser.JPEG", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Austin Kloewer", // Can be anything (usually your rival's name)
           link: 8, // manager array number within this array, or null to link back to all managers page
           image: "/managers/Klave.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 1466, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Win", // (optional)
         "tradingScale": 2, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

   {
    //   Austin Kloewer Manager Page
         "managerID": "741123762556215296",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Austin Kloewer",
         "location": "Iowa City, Iowa", // (optional)
         "bio": "A true Iowa City guy, Klave brings a passion to everything he does including the PM&B fantasy football league. Soon to be father of two, (3 if you count Franklin the dog) he has the family support behind him to bring home a championship.",
         "photo": "/managers/Klave.JPG", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Cole Hauser", // Can be anything (usually your rival's name)
           link: 7, // manager array number within this array, or null to link back to all managers page
           image: "/managers/Hauser.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 4901, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Draft a trusty QB, draft high caliber receivers, and pickup running backs later", // (optional)
         "tradingScale": 6, // 1 - 10 (optional)
         "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
         {
      // Camden Glenn Manager Page
      "managerID": "601841724330942464",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Camden Glenn",
      "location": "Iowa City, Iowa", // (optional)
      "bio": "Still a single man and having moved houses and changed jobs about 5 times in the last 2 years, Camden looks to fantasy football (and Christ) for some stability in his life. Improving every season he is poised to make another deep playoff run.",
      "photo": "/managers/Camden.JPEG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Gabe Simpson", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Gabe.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 323, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I get all my opinions from @32beatwriters. I'll take as much hate as I can be given, I'm secure in Christ... and my relationship with a celebrity. In my black sheep era.", // (optional)
      "tradingScale": 3.5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      //Cole Williams Manager Page
      "managerID": "601924024418762752",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Cole Williams",
      "location": "Iowa City, Iowa",// (optional)
      "bio": "Cole, an original member of the CLN, calls Iowa City his home with his wife and pup. He lets all of his weird energy out in the league chat and is never one to turn down a solid trade. His Vikings have yet to taste the glory of winning like he did in 2023.",
      "photo": "/managers/CW.JPEG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Casey.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
               },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "WRs run the league, RBs are trash", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      //Jordan Gunti Manager Page
      "managerID": "601847815487954944",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Jordan Gunti",
      "location": "Somewhere in Illinois", // (optional)
      "bio": "Jordan is a frontline healthcare hero analyzing the UHC's data. Recently married he will look to his wife's experience with the Iowa football team for guidance for fantasy strategy. Jordan always has irrationally high hopes for his Bears and his fantasy squad. ",
      "photo": "/managers/Jordan.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "The draft", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Ryan.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 279, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Have a bad draft and hope for the best", // (optional)
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
        },

        {
      //Caleb Fruhling Manager Page
      "managerID": "607310039975272448",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Caleb Fruhling",
      "location": "Cedar Rapids, Iowa", // (optional)
      "bio": "An uber talented musician, and medium talented fantasy manager, Caleb made his way home to Cedar Rapids and started a family. Some say he uses the power of music to convince fellow league mates to give up their best players. Beware.",
      "photo": "/managers/Caleb.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cole Williams", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/CW.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 279, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Trade away all your assets for future draft picks that get taken away from you by the league and also start trade negotions with 'how much can I get out of you for this player'.", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      //Jack Murphy Manager Page
      "managerID": "730817233667870720",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Jack Murphy",
      "location": "Iowa City, Iowa", // (optional)
      "bio": "A relatively new player to fantasy Jack taps into his love for Iowa State (F State) and the wisdom of his 2 year old daughter (she's wicked smart) for fantasy strategy. Jack returns to the PM&B after being a part of the CLNs inaugural season in 2021.",
      "photo": "/managers/Jack.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ryan Murphy", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Ryan.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
               },
      "favoritePlayer": 8183, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Get guys I like and have fun with it.", // (optional)
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },

        {
      //Anders Manager page
      "managerID": "606959285099917312",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Anders Almberg",
      "location": "Coralville, Iowa", // (optional)
      "bio": "A league Bro, Anders is always down to talk ball with the boys. Staying true to his Swedish roots, Anders keeps a level head and avoids as much of the league drama as he can.",
      "photo": "/managers/Ders.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kyle Martens", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Kyle.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
               },
      "favoritePlayer": 6826, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Without being dangerous you can't stay safe", // (optional)
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

      {
      //Alan manager page
      "managerID": "737887958132219904",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Alan Mazzarella",
      "location": "Greeley, Colorado", // (optional)
      "bio": "Fighting Fires and saving lives, Alan is a real frontline worker out in beautiful Colorado. New to both fantasy and marriage, you can always count on Alan to pick the right Birds. E-A-G-L-E-S EAGLES!",
      "photo": "/managers/Alan.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Casey", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Casey.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
               },
      "favoritePlayer": 676, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Pewpewpew I shoot at you!", // (optional)
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },


        {
      //Jacob manager page
      "managerID": "607752879746404352",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Jacob Rhein",
      "location": "Iowa City, Iowa", // (optional)
      "bio": "The University of Iowa's Tippie College of Business has many roots in the PM&B, none of them stronger than Jacob aka Billy Bean. Analytics drive every decision he makes including two of his biggest; Being a Steelers fan, and getting married to Avery.",
      "photo": "/managers/Jacob.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Casey Blaylock", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Casey.JPEG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6777, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "2002 oakland A's", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
  
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */


    //   {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
