# Promptopia - Share AI Prompts 🤖

![hero page](https://github.com/anav5704/promptopia-next-13/blob/main/docs/promptopia.png)

This is one of the first full-stack Next JS websites I have made. It's pretty simple, login and then perform CRUD operations on "AI Pronpts". This project also utilizes Next JS server actions, which were still experimental back when I made this.

## Technologies Used
- Next JS 13
- TailwindCSS
- MongoDB
- Next Auth

## Getting started

First fork and clone the repo. First run ```npm install``` to download all the dependencies. Now, set up your environmental variables. Make a ```.env``` file in the root of your project with the following variables:

```
GOOGLE_ID
GOOGLE_SECRET
MONGO_URI
NEXTAUTH_SECRET
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
```

Once that is done, run ```npm run dev``` to view it on localhost.

## Learning Resources

- [Next JS 13 crash course](https://www.youtube.com/watch?v=wm5gMKuwSYk)
- [Next JS docs](https://nextjs.org/)
- [Next Auth docs](https://next-auth.js.org/)



