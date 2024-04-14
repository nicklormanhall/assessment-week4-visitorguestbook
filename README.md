# assessment-week4-visitorguestbook

Notes added to Moodle & README.md

Week 4 Project: Build Visitor Guestbook

User Stories

🐿️ As a user, I want to visit the website and read the information on my phone or computer
🐿️ As a user, I want to be able to leave a message in the guestbook
🐿️ As a user, I want to be able to see all of the messages that have been left in the guestbook

REQUIREMENTS

🎯 Create a page containing a form to leave a message and a list of all the messages that have been left.
🎯 Style the form and the messages so they're easy to read on multiple kinds of device.
🎯 Create an API POST route to accept the text from your message input form
🎯 Create a database to store the messages, and create a seed file to create the table
🎯 Create an API GET route to retrieve all the messages from the database
🎯 Fetch the messages from your API in the browser and display them on the page.

STRECH GOALS

🏹 Add a delete button to each message, that sends a request to the server to delete the message
🏹 Add a like button to each message, that sends a separate request to the server to increment the likes on the message

PLANNING

One page form to include:

Header - Guest book
1: Subject
2: From
3: Message
4: stars 1 to 5?

My theme will be a fictitious hotel where guests can leave 1-5 star review, I want an image of the hotel.

After looking at several options I decided on the Overlook Hotel from the Shining, allowing me to create several fake reviews with actors names.

With this as my basis I decided to create my database schema and data first.

MUST DO

🎯 Create a page containing a form to leave a message and a list of all the messages that have been left.

    DONE

🎯 Style the form and the messages so they're easy to read on multiple kinds of device.

    DONE: I adjusted the screen margins and background image to change at 480px (for mobile) and 768 for tablets, the changes are minimal as the screens already works quite well (I do want  to look more into responsive design and ensure that going forward I cover the standard sizes)

🎯 Create an API POST route to accept the text from your message input form

    DONE

🎯 Create a database to store the messages, and create a seed file to create the table

    DONE

🎯 Create an API GET route to retrieve all the messages from the database

    DONE

🎯 Fetch the messages from your API in the browser and display them on the page.

    DONE

Some additional things I added:
Inclusion of the 1-5 stars, which were able to fill and unfill
I added some error handling to ensure the fields were all populated on submit

STRECH GOAL

🏹 Add a delete button to each message, that sends a request to the server to delete the message

    DONE

https://assessment-week4-visitorguestbook-1.onrender.com/ (live)
https://github.com/nicklormanhall/assessment-week4-visitorguestbook (github)

A issue that I came across was when I was trying different things to fix issues, I would change one thing then another and found out it was something else but then I struggled to remember what changes I had made. I didn't think it was worth creating new branch because I thought it would be quick to fix but I may need to start to create new branches to keep better control.

I came across a bug after I pushed to render where trying to add reviews would often not work. I realised this was an issue with my async/await and was able to correct
