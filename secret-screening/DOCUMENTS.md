Unit 4 Assessment

TASK
- Create React App w/ 3 pages
    - Home
    - Video
    - About
- Use the YouTube API
- Use React Router
- Can ONLY use
    - React
    - React-router-dom
    - React-youtube
    - axios
    - [OPTIONAL] bootstrap

YOUTUBE API KEY
- Captured successfully 

REQUIRED FEATURES
- Navbar w/ Links
- Homepage w/Search Form and Results Area
- Video page to Play Video and Leave Comments
- About Page with a short description
- MAKE IT LOOK NICE W/ STYLING

NAVBAR
- Must show on every page/route of the app
- Shows a logo
- Shows links to the following pages
    - Home “/“
    - About “/about”

HOME PAGE “/“
- Show a Search form w/
    - Search input field <input>
    - A search button <input type=submit>
- Show a status to encourage search instead of nothing “No search results. Search for videos above”
    - Swap this out for the actual search results
- Can fire search by pressing enter or by clicking button <form>
- The results MUST be ordered in columns with TWO results per row (2 column grid?)
- Only display the first 8 results

VIDEO COMPONENT
- Must display
    - Thumbnail image
    - Title of video
- Is just a link to the VIDEO page

VIDEO PAGE “/video/:id”
- User should be able to access page via the link to a specific video id
- Shows the YouTube player to show the specific YouTube video (react-youtube)
- Has a form below the video to submit a comment <form> <input>
    - Name
    - Comment
    - Submit Button
- Adding a new comment will add the comment to a list of comments
    - If they fail to fill everything out, alert the user and block the post (NO NULL)
- List comments depending from newest to oldest
- Comments do not need to be persisted!
    - All comments can be stored in the state for the moment
    - Refreshing the page will make comments disappear 
    - If time permits, use LocalStorage to keep those comments (RESEARCH)

ABOUT PAGE “/about”
- Show a header with the text About
- Show a short description about what this app is, and who developed it