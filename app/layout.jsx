import "@styles/globals.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"

export const metadata = {
    title: "Promptopia: Next JS 13",
    description: "Discover and Sare AI Prompts!"
}

const Root = ({children}) => {
  return (
    <html lang="eng">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default Root
